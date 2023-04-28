
const jwt = require("jsonwebtoken");
const cors = require("cors");
const express = require("express");
const adminSchema = require('../../modals/admin/admin')
const User = require('../../modals/user.modal')
const app = express()
const router = express.Router()
app.use(cors())
app.use(express.json())
router.post('/register', async (req, res)=>{
    try{
        console.log('a', req)
        const user = await adminSchema.create({
            email:req.body.email,
            password: req.body.pass
        })

        res.json({
            status:200,
            message:'admin registration successfully done.'
        });
    }
    catch (e){

    }
})

// router.post('/login', async (req, res) => {
//     try {
//         const user = await User.findOne({
//             name: req.body.name,
//             pass: req.body.pass
//         })
//         if (user) {
//             const token = jwt.sign({
//                 name:user.name,
//                 email:user.email
//             },'dbslab1234')
//             res.json({
//                 status: 200,
//                 message: 'Login Successful',
//                 token:token
//             })
//         } else {
//             res.json({
//                 status: 203,
//                 message: 'User doesnt exist'
//             })
//         }
//     } catch (err) {
//         console.log(err)
//     }
// })

module.exports = router