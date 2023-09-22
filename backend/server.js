const express = require("express")
const notes = require("./data/notes")
const dotenv = require('dotenv')        // notenv secure rakhta h (PORT 3000) k liye use krte h


const app = express()
dotenv.config()

app.get('/' , (req,res,send)=>{
    res.send("Api is running..")
})

app.get('/api/notes',(req,res)=>{
    res.json(notes)
})

app.get("/api/notes/:id",(req,res )=>{
    // res.json(notes)
    const note = notes.find((n) => n._id === req.params.id)
    res.send(note)
})


const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`server started on ${PORT}`))