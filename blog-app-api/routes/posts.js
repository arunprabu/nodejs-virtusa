var express = require('express');
var router = express.Router();
var postService = require('../services/postService'); //1. connect to service 

router.post('/', ( req, res ) => {
  console.log(req.body);

  //send it to the Service 
  postService.createPost( req.body, ( err, data) =>{ //get the resp from the service 
    console.log(data);

    if(!err){
      res.json(data); // send it back to rest client
    }else{
      res.json(err);
    }
  });

  
  
   

})


/* POST post creation */
router.post('/', ( req, res ) =>{
  console.log( req.body);

  //2. send the data to service method 
  postService.addPost(req.body, function( err, data ) {
    //3. get the resp from services
    console.log(data);
    if (!err) { 
      //4. send it to the rest client
      res.json(data);
    } else {
      res.json(err);
    }
  });

});

/* GET post details. listening on URL params */
router.get('/:id', function(req, res, next) {
  
  console.log(req.params.id);
  postService.getPostById(req.params.id, (err, data) => {
    console.log(data);
    if (!err) { 
      res.json(data);
    } else {
      res.json(err);
    }
  });

});

/* PUT blog posts */
router.put('/1', (req, res) => {
  console.log(req.body);

  //static json data 
  // #1 way: send saved successfully alone
  res.json( { status: "Saved Successfully!", code: 200});
  
  console.log(res);

  // #2 way: send the updated data 
  // res.json({  id: 1, 
  //     title: "iphone 11 introduced",
  //     body: "apple launching new iphone...",
  //     category: 'Mobile'
  // });
});


router.delete('/1', (req, res) => {
  console.log(req);
  //sending status of delete 
  res.json( { status: "Deleted Successfully!", code: 200});
})

module.exports = router;
