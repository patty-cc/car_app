var express = require('express');
var path = require('path');

var app = express();

//set Static path
// app.use(express.static(path.join(__dirname, 'client')));

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname + '/client/index.html'))
})

app.listen(3000, function() {
  console.log('is it working?');
});
