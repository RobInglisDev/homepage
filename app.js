const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

// SETUP LISTENER & BODY-PARSER
app.listen(process.env.PORT || port, function () {
    console.log("Server listening on port " + port);
});
app.use(bodyParser.urlencoded({ extended: true }));


// SETUP MONGOOSE
mongoose.connect('mongodb://localhost:27017/userDB', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected to DB");
});
var userSchema = new mongoose.Schema({
    name: String,
    email: String
});
var User = mongoose.model("User", userSchema);

// ROUTE FOR /
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");

    User.find(function (err, users) {
        if (err) {
            console.log(err)
        } else {
            users.forEach(function (user) {
                // console.log(user.name);
            })
        }
    });
});

app.post("/", function (req, res) {
    var firstName = req.body.firstName;
    var email = req.body.email;
    res.send("Got It: " + firstName + email);

    var user = new User({ name: firstName, email: email });
    user.save();
    console.log(user.name + " has been saved.");

    User.find(function (err, users) {
        if (err) {
            console.log(err)
        } else {
            // console.log(users);
        }
    });
})

// ROUTE FOR /about
app.get("/about", function (req, res) {
    res.send("<h1>Rob Inglis - About</h1>");
});

// ROUTE FOR /contact
app.get("/contact", function (req, res) {
    res.send("<h1>Rob Inglis - Contact</h1>");
});

