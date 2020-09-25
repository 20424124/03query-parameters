// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

var todos = [
  { id: 1, do: "Đi Chợ" },
  { id: 2, do: "Nấu Cơm" },
  { id: 3, do: "Rửa Bát" },
  { id: 4, do: "Học code tại CoderX" }
];

https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.send("I love CodersX");
});

app.get("/todos", function(req, res) {
  var q = req.query.q;
  var matchedTodos = todos.filter(function(todo) {
    console.log(todo.do.toLowerCase());
    return todo.do.toLowerCase().indexOf(q) !== -1;
  });
  res.render("index", {
    todos: matchedTodos
  });
});
// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
