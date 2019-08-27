const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// SETUP LISTENER & BODYPARSER
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTE FOR /
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
});
app.post("/", function (req, res) {
    var firstName = req.body.firstName;
    res.send("Got It: " + firstName);
})

// ROUTE FOR /about
app.get("/about", function (req, res) {
    res.send("<h1>Rob Inglis - About</h1>");
});

// ROUTE FOR /contact
app.get("/contact", function (req, res) {
    res.send("<h1>Rob Inglis - Contact</h1>");
});


