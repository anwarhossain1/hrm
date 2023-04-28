const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();

const User = require('./modals/user.modal')
const connectDB = require('./ConnectDB')
const userAuthentication = require('./routes/user/authentication')
app.use(cors())
app.use(express.json())
connectDB()

app.use('/user', userAuthentication);


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