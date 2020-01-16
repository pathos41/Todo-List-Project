// Mongoose commands
"use strict";
const DBConn = require("./../../../models/mongoose-connect");
const Todo = require("./../../../models/todo");

function UpdateTodoByContent(req, res){
  // Connect to database
  DBConn();

  // The todo to be found
  let myQuery = { todo: req.swagger.params.content.value };
  // The new todo to be updated
  let newValues = { 
    todo_id: req.swagger.params.updated_todo.value.todo_id, 
    todo: req.swagger.params.updated_todo.value.todo,
    datecreated: req.swagger.params.updated_todo.value.datecreated,
    author: req.swagger.params.updated_todo.value.author,
    duedate: req.swagger.params.updated_todo.value.duedate,
    completed: req.swagger.params.updated_todo.value.completed
  };

  // Find a todo item by its content and update it
  Todo.findOneAndUpdate(myQuery, newValues, (err, todo) => {
    if(err){
      console.log("err");
    }else{
      res.json(todo);
    }
  });
}

module.exports = {
  UpdateTodoByContent: UpdateTodoByContent
}

// MongoDB commands
// "use strict";

// module.exports = {
//   UpdateTodoByContent: UpdateTodoByContent
// }

// function UpdateTodoByContent(req, res){
//   var MongoClient = require('mongodb').MongoClient;
//   var url = "mongodb://localhost:27017/";
  
//   MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("Todo");
//     var myquery = { todo: req.swagger.params.content.value };
//     var newvalues = { 
//       $set: {
//         todo_id: req.swagger.params.updated_todo.value.todo_id, 
//         todo: req.swagger.params.updated_todo.value.todo,
//         datecreated: req.swagger.params.updated_todo.value.datecreated,
//         author: req.swagger.params.updated_todo.value.author,
//         duedate: req.swagger.params.updated_todo.value.duedate,
//         completed: req.swagger.params.updated_todo.value.completed
//       } 
//     };
//     dbo.collection("todos").updateOne(myquery, newvalues, function(err, result) {
//       if (err) throw err;
//       res.json({state: "success!"});
//       db.close();
//     });
//   });
// }