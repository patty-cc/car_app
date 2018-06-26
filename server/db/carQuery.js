var MongoClient = require('mongodb').MongoClient;

Var carQuery = function(takeThisData){
  MongoClient.connect("mongodb://localhost:27017/cars", function(err, db) {
    db.collection("lambo").find().toArray(function(err, docs) {
      console.log(docs);

      data(docs);
    })
  })
};

module.exports = CarQuery;
