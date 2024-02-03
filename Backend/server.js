const express = require("express")
const app = express()
require("dotenv").config()

const PORT = process.env.PORT || 3065

app.get('/', (req, res) => {
    res.send('Railway Mate Api is Working')
})

app.get("/ping", ((req, res) => {
    res.send("ponggg")
}))

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT} `)
    console.log(`http://localhost:${PORT}`)
})
