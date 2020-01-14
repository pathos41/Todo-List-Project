"use strict";

module.exports = {
  DeleteTodoById: DeleteTodoById
}

function DeleteTodoById(req, res){
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";

  MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Todo");
    dbo.collection("todos").deleteOne({ todo: req.swagger.params.id.value }, function(err, obj) {
      if (err) throw err;
      res.json({state: "success!"});
      db.close();
    });
  });
}