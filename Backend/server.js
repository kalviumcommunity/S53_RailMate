const express = require("express")
const app = express()
require("dotenv").config()
const connectDB=require("./db")
connectDB()
const router = require("./route");
const cors = require("cors");
app.use(cors());
app.use("/Train", router);

const PORT = process.env.PORT || 3064

app.get('/', (req, res) => {
    res.send('Railway Mate Api is Working')
})

app.get("/ping", ((req, res) => {
    res.send("pong")
}))

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT} `)
    console.log(`http://localhost:${PORT}`)
})
