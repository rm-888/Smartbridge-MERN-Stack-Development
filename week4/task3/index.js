const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware to parse JSON requests using body-parser
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server started and running at Port:${PORT}`);
});
