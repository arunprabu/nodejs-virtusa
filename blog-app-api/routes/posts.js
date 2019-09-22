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


/* GET post details. listening on URL params */
router.get('/', function(req, res, next) {

  postService.getPosts((err, data) => {
    console.log(data);
    if (!err) { 
      res.json(data);
    } else {
      res.json(err);
    }
  });

});

/* GET post details. listening on URL params */
router.get('/:postId', function(req, res, next) {
  
  console.log(req.params.postId);
  //Todo: this should become util method because used in put method callback also
  postService.getPostById(req.params.postId, (err, data) => {
    console.log(data);
    if (!err) { 
      res.json(data);
    } else {
      res.json(err);
    }
  });
});


/* PUT blog posts */
router.put('/:postId', (req, res) => {
  console.log(req.body);

  postService.updatePost(req.params.postId, req.body, (err, data) => {
    console.log(data);
    if (!err) { 
      //Todo: this should become util method
      postService.getPostById( req.params.postId,  (err, data ) => {
        console.log(data);
          if (!err) { 
            res.json(data);
          }else {
            res.json(err);
          }
      });
    } else {
      res.json(err);
    }
  });

});

/* Todo: Delete */ 
router.delete('/1', (req, res) => {
  console.log(req);
  //sending status of delete 
  res.json( { status: "Deleted Successfully!", code: 200});
})

module.exports = router;
