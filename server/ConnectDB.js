const mongoose = require('mongoose')
require('dotenv').config();

const connectDB = async ()=>{
    const db_url = "mongodb+srv://irishkhan33:"+encodeURIComponent("12345678#") +"@cluster0.b7slsaz.mongodb.net/test"
    try{
        await mongoose.connect(db_url,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
    }
    catch (err){
        console.error(err)
    }
}

module.exports = connectDB