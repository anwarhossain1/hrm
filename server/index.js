const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();

const User = require('./modals/user.modal')
const connectDB = require('./ConnectDB')
app.use(cors())
app.use(express.json())
connectDB()

app.post('/api/login', async (req, res) => {
    try {
        const user = await User.findOne({
            name: req.body.name,
            pass: req.body.pass
        })
        console.log('as', req.body, user)
        if (user) {
            res.json({
                status: 200,
                message: 'Login Successful'
            })
        } else {
            res.json({
                status: 203,
                message: 'User doesnt exist'
            })
        }
    } catch (err) {
        console.log(err)
    }
})

app.post('/employee/register', async (req, res)=>{
  try{
      const user = await User.create({
          name: req.body.name,
          email:req.body.email,
          pass: req.body.pass
      })
  }
  catch (e){

  }
})


app.get('/hello', (req, res) => {
    res.send("hello world")
})
mongoose.connection.once('open', () => {
    console.log('mongodb connected')
})
app.listen(1337, () => {
    console.log('server started at port number 1337')
})