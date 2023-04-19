const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.post('/api/login', (req,res)=>{
    console.log('as', req.body)
    res.json({
        status:200
    })
})
app.get('/hello', (req,res)=>{
    res.send("hello world")
})
app.listen(1337, ()=>{
    console.log('server started at port number 1337')
})