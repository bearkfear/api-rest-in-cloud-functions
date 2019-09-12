const functions = require('firebase-functions');
const admin = require("firebase-admin");
const app = require("express")();

admin.initializeApp();
const db = admin.firestore().collection("todos");

// TODO: create todoList
// TODO: remove todoList


app.get("/todos", function (request, response) {
  db.get()
    .then(function (docs) {
      let todos = [];
      docs.forEach(function (doc) {
        todos.push({
          id: doc.id,
          description: doc.data().description
        })
      })
      response.json(todos);
    });
})

app.post("/todos", function (request, response) {
  db.add({ description: request.body.description })
    .then(function () {
      response.json({ general: "Works" });
    })
})

exports.api = functions.https.onRequest(app)
