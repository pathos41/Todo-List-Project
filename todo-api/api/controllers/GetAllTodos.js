"use strict";

module.exports = {
  GetAllTodos: GetAllTodos
}

function GetAllTodos(req, res){
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";

  MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Todo");
    dbo.collection("todos").find({}).toArray(function(err, result) {
      if (err) throw err;
      res.json(result);
      db.close();
    });
  });
}