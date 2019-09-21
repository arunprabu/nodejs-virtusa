const mongoose = require("./mongo"); // mongodb connection setup
var autoIncrement = require('mongoose-auto-increment'); //for auto incrementing during create

let Schema = mongoose.Schema;

var Post = new Schema({
    postId: {
        type: Number,
        unique: true, // primary key
    },
    title: String,
    body: String,
    createdBy : String,
    createdOn : {type: Date, default: Date.now},
    updatedBy : String,
    updatedOn : {type: Date, default: Date.now},
    isActive: Boolean
});

Post.plugin(autoIncrement.plugin, {model: 'Post', field: 'postId', startAt: 1});
module.exports = mongoose.model('Post', Post);

