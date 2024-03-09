const express = require('express');
const app = express();
const PORT = 3003;
app.use(express.json());


app.delete("/", (req, res) => {
    console.log("DELET request successful")
    res.send("DELETE Req Success!");
})

app.listen(PORT, (req, res) => {
    console.log (`Server listening on ${PORT}`)
}) 