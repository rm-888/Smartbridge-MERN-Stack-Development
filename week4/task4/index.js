const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());   // Middleware

app.get("/welcome", (req, res) => {
    res.json({ message: "Welcome to Express!" });
});

app.listen(PORT, () => {
    console.log(`Server started and running at Port:${PORT}`);
});
