var express = require('express');
var path = require('path');

var app = express();

app.get("/home", function(req, res){
  res.send("Hello World");
})

app.listen(3000, function() {
  console.log('is it working?');
});
