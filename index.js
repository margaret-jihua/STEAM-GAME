const express = require('express')

const app = express()

app.get('/', (req, res)=> {
    res.sendFile(__dirname+"/index.html")
})

app.listen(8000, console.log("You are listening to port 8000"))