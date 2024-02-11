const express = require("express")
const app = express()
require("dotenv").config()
const connectDB=require("./db")
connectDB()
const PORT = process.env.PORT || 3064
const router=require("./routes")
app.get('/', (req, res) => {
    res.send('Railway Mate Api is Working')
})
app.use("/Train",router)
app.get("/ping", ((req, res) => {
    res.send("Vishnu Preethasm")
}))

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT} `)
    console.log(`http://localhost:${PORT}`)
})
