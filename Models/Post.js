// connet to mongoose
const mongoose =  require('mongoose');
// connect to mongoose schema and create a Schema
const Schema = mongoose.Schema;

// create schema from mongoo.schema
const PostSchema = new Schema({
    title: String,
    detail: String,
    dataCreated: {
        type: Date,
        default: Date.now
    },
});
// create model
const Post = mongoose.model('Post', PostSchema);
// export the file
module.exports = Post;
