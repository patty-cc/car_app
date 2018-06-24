var MongoClient = require('mongodb').MongoClient;

Var carQuery = function(data){
  MongoClient.connect("mongodb://localhost:27017/cars", function(err, db) {
    db.collection("lambo").find().toArray(function(err, docs) {
      console.log(docs);

      data(docs);
    })
  })
};

module.exports = CarQuery;
