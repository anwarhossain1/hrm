const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();

const User = require('./modals/user.modal')
const connectDB = require('./ConnectDB')
//routes
const userAuthentication = require('./routes/user/authentication')
const adminAuthentication = require('./routes/admin/login')
app.use(cors())
app.use(express.json())
connectDB()
mongoose.connection.once('open', () => {
    console.log('mongodb connected')
})
app.listen(1337, () => {
    console.log('server started at port number 1337')
})

app.use('/user', userAuthentication);
app.use('/admin', adminAuthentication);


