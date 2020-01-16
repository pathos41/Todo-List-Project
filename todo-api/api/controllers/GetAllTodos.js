// Mongoose commands
"use strict";
const DBConn = require("./../../../models/mongoose-connect");
const Todo = require("./../../../models/todo");

function GetAllTodos(req, res){
  // Connect to database
  DBConn();
  // Get all the todos in database
  Todo.find({}, (err, todos) => {
    if(err){
      console.log("err");
    }else{
      res.json(todos);
    }
  });

  // MongoDB commands
  // var MongoClient = require('mongodb').MongoClient;
  // var url = "mongodb://localhost:27017/";

  // MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("Todo");
  //   dbo.collection("todos").find({}).toArray(function(err, result) {
  //     if (err) throw err;
  //     res.json(result);
  //     db.close();
  //   });
  // });
}

module.exports = {
  GetAllTodos: GetAllTodos
}