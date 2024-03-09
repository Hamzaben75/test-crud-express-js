const express = require('express');
const app = express();
const PORT = 3002;
app.use(express.json());


app.put("/", (req, res) => {
    console.log("PUT request successful")
    res.send("PUT Req Success!");
})

app.listen(PORT, (req, res) => {
    console.log (`Server listening on ${PORT}`)
}) 