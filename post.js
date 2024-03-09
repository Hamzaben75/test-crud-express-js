const express = require('express');
const app = express();
const PORT = 3001;
app.use(express.json());


app.post("/", (req, res) => {
    console.log("POST request successful")
    res.send("POST Req Success!");
})

app.listen(PORT, (req, res) => {
    console.log (`Server listening on ${PORT}`)
}) 