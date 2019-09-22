var express = require('express');
var router = express.Router();
var Post = require('../models/post');

/* GET home page. */
router.get('/', (req, res, next) => {
  //to give json data 
  res.json({name: 'John'});
});

//Async  Await Demo 
router.post('/wow', async (req, res) => {
   // db query 
  //1. connect to db 
  //2. execute the query 
  //3. send the info back

  //connect to model directly // or any other third party rest api server using the following approach
  const post = new Post({
    title: req.body.title,
    body: req.body.body,
  });

  try{
    const postStatus = await post.save();
    res.send(postStatus);
  }catch(err) {
    res.status(400).send(err);
  }
});

module.exports = router;
