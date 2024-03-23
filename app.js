const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());


app.get("/", (req, res) => {
    console.log("GET request successful")
    res.send("Get Req Success!");
})

app.delete("/", (req, res) => {
    console.log("DELET request successful")
    res.send("DELETE Req Success!");
})

app.post("/", (req, res) => {
    console.log("POST request successful")
    res.send("POST Req Success!");
})
app.put("/", (req, res) => {
    console.log("PUT request successful")
    res.send("PUT Req Success!");
})

app.listen(PORT, (req, res) => {
    console.log (`Server listening on ${PORT}`)
}) 