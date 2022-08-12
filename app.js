const express = require("express");
const ejs = require("ejs");

const app = express();


// MIDDLEWARE
const myLogger = (req, res, next) => {
    console.log("Middleware 1");
    next();
}

app.set("view engine", "ejs");

app.use(express.static('public'))
app.use(myLogger);

app.get("/", (req, res) => {
    res.render("index");
})
app.get("/about", (req, res) => {
    res.render("about");
})
app.get("/add", (req, res) => {
    res.render("add");
})

const port = 5000;
app.listen(port, () => {
    console.log("Server is started on " + port + " port");
})