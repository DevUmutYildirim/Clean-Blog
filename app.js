const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const Post = require('./Models/Post')
const app = express();

// connect to database
mongoose.connect('mongodb://localhost/clean-blog-db', {
    useNewUrlParser : true,
    useUnifiedTopology : true
});
// template engine
app.set("view engine", "ejs");

// Middlewares
app.use(express.static('public'))
app.use(express.urlencoded({extended: true})) // read the data from the url
app.use(express.json()) // convert the data to JSON


app.get("/", async (req, res) => {
    const posts = await Post.find({})
    res.render("index", {
        posts
    });
});

app.get('/posts/:id', async (req, res) => {
    const post = await Post.findById(req.params.id)
    res.render('post', {
        post
    })
});

app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/add", (req, res) => {
    res.render("add");
});

app.post("/posts", async (req, res) => {
    await Post.create(req.body)
    res.redirect('/');
});

const port = 5000;
app.listen(port, () => {
    console.log("Server is started on " + port + " port");
})