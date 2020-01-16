// Mongoose commands
"use strict";
const DBConn = require("./../../../models/mongoose-connect");
const Todo = require("./../../../models/todo");

function AddTodo(req, res){
  // Connect to database
  DBConn();
  // Create a new todo item
  Todo.create({
    todo_id: req.swagger.params.todo.value.todo_id, 
    todo: req.swagger.params.todo.value.todo,
    datecreated: req.swagger.params.todo.value.datecreated,
    author: req.swagger.params.todo.value.author,
    duedate: req.swagger.params.todo.value.duedate,
    completed: req.swagger.params.todo.value.completed
  }, (err, todo) => {
    if(err){
      console.log("err");
    }else{
      res.json(todo);
    }
  });
}

module.exports = {
  AddTodo: AddTodo
}

// MongoDB commands
// "use strict";

// module.exports = {
//   AddTodo: AddTodo
// }

// function AddTodo(req, res){
//   var MongoClient = require('mongodb').MongoClient;
//   var url = "mongodb://localhost:27017/";

//   MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("Todo");
//     var myobj = { 
//       todo_id: req.swagger.params.todo.value.todo_id, 
//       todo: req.swagger.params.todo.value.todo,
//       datecreated: req.swagger.params.todo.value.datecreated,
//       author: req.swagger.params.todo.value.author,
//       duedate: req.swagger.params.todo.value.duedate,
//       completed: req.swagger.params.todo.value.completed
//     };
//     dbo.collection("todos").insertOne(myobj, function(err, result) {
//       if (err) throw err;
//       res.json({state: "success!"});
//       db.close();
//     });
//   });
// }