const mongoose = require("mongoose");

function DBConn(){  
  // Use mongoose to connect to database
  mongoose.connect("mongodb://localhost:27017/Todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("Connected to DB!");
  }).catch((err) => {
    console.log("Error: ", err.message);
  });
}

module.exports = DBConn;