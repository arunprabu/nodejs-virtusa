var User = require("../models/user");
//generate password
//var generator = require('generate-password');
//var sgMail = require('@sendgrid/mail');
var passport = require('passport');

exports.signup = ( userData, callback ) => {
    console.log(userData);
    // execute query but dont save the p/w 
    // instead save the equivalent hash and salt -- passport 

    var userDao = new User(userData);

    //generate temp password 
    // var _tempPassword = generator.generate({
    //   length: 14,
    //   numbers: true
    // });

    //to create salt and hash for the p/w
    //userDao.setPassword(userData.password); 
    console.log(userDao);

    //in case if you make the schema as non-strict - because password is coming from routes
    delete userDao['password'];
    userDao.save((err, savedUser) => {
        // 4.After Saving the records, send email with a temp password or else with a link to verify email
        // But, we are not sending email, instead let the user login with a password
        
        // the following is optional
        // sgMail.setApiKey("<your api key>");
        // const msg = {
        //   to: 'test@example.com',
        //   from: 'test@example.com',
        //   subject: 'Sending with Twilio SendGrid is Fun',
        //   text: 'and easy to do anywhere, even with Node.js',
        //   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        // };
        // sgMail.send(msg);


          if (!err) {
              console.log(`User registered successfully with userId:${savedUser.userId}`);
          }
          
          delete savedUser._doc.salt;
          delete savedUser._doc.hash;
          delete savedUser._doc.password;
          
          callback(err, savedUser);
      });
}

//login flow
exports.login = function(req, callback){
  
    console.log(req);
    //auth flow with passport
    passport.authenticate('local', function(err, user, info){
      // If Passport throws/catches an error
      if (err) {
        callback(err);
      }
  
      // If a user is found
      if(user){      
        var userData = {  
                          email : user.email, 
                          name: user.name,
                          phone: user.phone,
                          createdBy: user.createdBy,
                          createdOn: user.createdOn,
                          updatedBy: user.updatedBy,
                          updatedOn: user.updatedOn,
                          token: user.generateJWT()
                       }
        callback(err, userData);
      } else {
        // If user is not found, send the following from routes
        //res.status(401).json(info);
      callback(err, info);
      }
    })(req, callback);
  }