var express = require("express");
var app = express();

var things = require("./things");
app.use('/things', things);

app.get('/', function (req, res) {
    res.send('Hello from Main page');
})




app.listen(3000, function () {
    console.log("Server listening on port 3000")
})