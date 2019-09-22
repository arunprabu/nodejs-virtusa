const mongoose = require("./mongo"); // mongodb connection setup
var autoIncrement = require('mongoose-auto-increment'); //for auto incrementing during create
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

let Schema = mongoose.Schema;

var User = new Schema({
    userId: {
        type: Number,
        unique: true, // primary key
    },
    name: String, 
    email: String,
    hash: String,
    salt: String,
    createdBy : String,
    createdOn : {type: Date, default: Date.now},
    updatedBy : String,
    updatedOn : {type: Date, default: Date.now},
    isEmailVerified: Boolean,
    status: Boolean
}, { strict: false });  // in order to capture unstructured data you can go with flexible schema

//util method to set salt and hash for the entered password
User.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
}

//validating password and returning true or false
User.methods.validatePassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
};

User.methods.generateJWT = function() {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);
  
    return jwt.sign({
      email: this.email,
      id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secret');
}

User.plugin(autoIncrement.plugin, {model: 'User', field: 'userId', startAt: 1});
module.exports = mongoose.model('User', User);