const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

// Root route
app.get("/", (req, res) => {
  res.redirect("/todos"); 
});

// Index route
app.get("/todos", (req, res) => {
  // Use node-fetch to make an API call to get all todos and render the home page with them
  fetch("http://localhost:10010")
    .then(result => result.json())
    .then(todos => res.render("todos", {todos: todos}));
});

// Delete route
app.get("/todos/delete/:content", (req, res) => {
  // Use node-fetch to make an API call to delete a todo item
  fetch(`http://localhost:10010/todo/delete/${req.params.content.replace("_", " ")}`, {method: 'delete'})
    .then(console.log("Todo Deleted Successfully!"))
    .then(() => res.redirect("/todos"));
});

// App listens to port 3000
app.listen(3000, () => {
  console.log("Server is up and running!");
});