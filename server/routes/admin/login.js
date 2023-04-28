
const jwt = require("jsonwebtoken");
const cors = require("cors");
const express = require("express");
const adminSchema = require('../../modals/admin/admin')
const employeeSchema = require('../../modals/admin/employeeRegistration')

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
router.post('/login', async (req, res) => {
    try {
        const user = await adminSchema.findOne({
            email: req.body.email,
            password: req.body.pass
        })
        if (user) {
            const token = jwt.sign({
                email:user.email
            },'admin123')
            res.json({
                status: 200,
                message: 'Login Successful',
                token:token
            })
        } else {
            res.status(203).json({
                message: 'User doesnt exist'
            })
        }
    } catch (err) {
        console.log(err)
    }
})

router.post('/employee/register', async (req, res)=>{
    try{
        console.log(req)
        const user = await employeeSchema.create({
            f_name: req.body.f_name,
            l_name: req.body.l_name,
            email:req.body.email,
            password: req.body.password
        })
        res.json({
            message:'Employee added successfully'
        })
    }
    catch (e){
        console.log('a', req)
        // res.sendStatus(403).json({
        //     message:'Something went wrong'
        // })
    }
})

module.exports = router