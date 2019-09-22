var Post = require("../models/post");  // 0. connection to db should be established 

exports.createPost = ( postToBeSaved, callback) => {
    console.log(postToBeSaved);

    let postDao = new Post(postToBeSaved);

    postDao.save( ( err, data) => {
        
        if(!err){
            console.log(data);
        }
        callback(err, data);
    })
}

exports.getPosts = (callback ) => {
    Post.find({}, (err, data) => {
        if(!err){
            console.log(data);
        }
        callback(err, data);
    });
}

exports.getPostById = (id, callback) => {
    Post.findOne({ postId: id }, ( err, data ) => {
        if(!err){
            console.log(data);
        }
        callback(err, data);
    });
}

exports.updatePost = (id, newPostData, callback ) => {
    console.log( id);
    Post.updateOne( { postId: id }, newPostData, (err, data) => {
        if(!err){
            console.log(data);
        }
        callback(err, data);
    });
}

//Todo: Delete Post