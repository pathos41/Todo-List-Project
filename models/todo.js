const mongoose = require("mongoose");

// Create a new schema and use the collection todos
const todoSchema = new mongoose.Schema(
  {
    todo_id: Number,
    todo: String,
    datecreated: {
      type: Date,
      default: Date.now
    },
    author: String,
    duedate: Date,
    completed: Boolean
  },
  {collection: "todos"}
);

// Create a new todo model using the todoSchema
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;