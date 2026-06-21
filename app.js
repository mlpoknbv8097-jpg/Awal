import express from "express";

const app = express();

app.use(express.json());

let users = [];

app.get("/user", (request, response) => {
  if (users.length == 0) {
    response.status(404).send("No users fount!");
  }
  response.status(200).send(users);
});

app.post("/user", (request, response) => {
  console.log(request.body);
  const FindUser = users.find((x) => x.id == users.id);
  if (FindUser) {
    response.status(400).send("User Already Exists!");
    return;
  }
  response.status(201).send("Created!");
});

app.post("/user/:id", (request, response) => {
  console.log(request.body);
  const FindUserIndex = users.find((x) => x.id == users.id);
  if (FindUser == -1) {
    response.status(404).send("User Already Exists!");
    return;
  }
  users.splice(FindUserIndex, 1);
  response.status(200).send("User Deleted Successfully!");
});

app.listen(3000, () => {
  console.log("Started at 3000");
});
