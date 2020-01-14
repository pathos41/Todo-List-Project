"use strict";

module.exports = {
  UpdateTodoById: UpdateTodoById
}

function UpdateTodoById(req, res){
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";
  
  MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Todo");
    var myquery = { todo_id: req.swagger.params.id.value };
    var newvalues = { 
      $set: {
        todo_id: req.swagger.params.updated_todo.value.todo_id, 
        todo: req.swagger.params.updated_todo.value.todo,
        datecreated: req.swagger.params.updated_todo.value.datecreated,
        author: req.swagger.params.updated_todo.value.author,
        duedate: req.swagger.params.updated_todo.value.duedate,
        completed: req.swagger.params.updated_todo.value.completed
      } 
    };
    dbo.collection("todos").updateOne(myquery, newvalues, function(err, result) {
      if (err) throw err;
      res.json({state: "success!"});
      db.close();
    });
  });
}

