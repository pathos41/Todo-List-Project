// Mongoose commands
"use strict";
const DBConn = require("./../../../models/mongoose-connect");
const Todo = require("./../../../models/todo");

function DeleteTodoByContent(req, res){
  // Connect to database
  DBConn();
  // Find a todo item by its content and delete it
  Todo.findOneAndDelete({ todo: req.swagger.params.content.value }, (err) => {
    if(err){
      console.log("err");
    }
  });
}

module.exports = {
  DeleteTodoByContent: DeleteTodoByContent
}

// MongoDB commands
// "use strict";

// module.exports = {
//   DeleteTodoByContent: DeleteTodoByContent
// }

// function DeleteTodoByContent(req, res){
//   var MongoClient = require('mongodb').MongoClient;
//   var url = "mongodb://localhost:27017/";

//   MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("Todo");
//     dbo.collection("todos").deleteOne({ todo: req.swagger.params.content.value }, function(err, obj) {
//       if (err) throw err;
//       res.json({state: "success!"});
//       db.close();
//     });
//   });
// }