"use strict";

module.exports = {
  FindTodoById: FindTodoById
}

function FindTodoById(req, res){
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";
  
  MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Todo");
    dbo.collection("todos").find({ todo_id: req.swagger.params.id.value }).toArray(function(err, result) {
      if (err) throw err;
      res.json(result);
      db.close();
    });
  });
}