const express = require("express");
const app = express();
const port = 3000;

app.listen(port, function () {
    console.log("Server listening on port " + port);
});

app.get("/", function (req, res) {
    // console.log(req);
    res.send("<h1>Rob Inglis</h1>");
})


