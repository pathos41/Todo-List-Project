const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

// Root route
app.get("/", (req, res) => {
  res.redirect("/todos"); 
});

// Show route
app.get("/todos", (req, res) => {
  // Use node-fetch to make an API call to get all todos and render the home page with them
  fetch("http://localhost:10010")
    .then(result => result.json())
    .then(todos => res.render("todos", {todos: todos}));
});

// App listens to port 3000
app.listen(3000, () => {
  console.log("Server is up and running!");
});