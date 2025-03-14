const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());   // Middleware

let users = [
    {id: 1, name: "Rujula", email: "rujula@gmail.com" }
];

app.post("/users", (req, res) => {
    users.push(req.body);
    res.send(req.body);
});

app.get("/users", (req, res) => {
    res.json(users);
});

app.put("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.map(user => user.id === userId ? req.body : user);
    res.send(req.body);
});

app.delete("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(user => user.id !== userId);
    res.send({ message: "User deleted successfully" });
});

app.listen(PORT, () => {
    console.log(`Server started and running at Port:${PORT}`);
});
