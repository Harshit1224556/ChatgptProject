const userModel = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function registeruser(req,res){
   
    const {fullName :{firstName,lastName},email,password} = req.body
     
    const isUseralreadyexist = await userModel.findOne({email})
     const hashpassword = await bcrypt.hash(password,10)
    if(isUseralreadyexist){
         return res.status(400).json({
            message:"User message already exists"
        })
    }

    const user = await userModel.create({
        fullName:{
            firstName,lastName
        },
        email,
        password:hashpassword

    })

     const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

     res.cookie("token",token)
      
     res.status(200).json({
        message:"User connected Successfully",
        user:{
            email:user.email,
            _id:user._id,
             fullName:user.fullName
        }
     })
}

async function loginuser(req,res){
    const {email,password} = req.body
    const user = await userModel.findOne({email})
    if(!user){
        res.status(401).json({
            message :"Invalid Email"
        })
    }

    const ispasswordvalid  = await bcrypt.compare(password,user.password)

    if(!ispasswordvalid){
        res.status(401).json({
            message:"Invalid Password"
        })
    }

    const token = jwt.sign({_id:user._id},process.env.JWT_SECRET)
    res.cookie("Token",token)
    res.status(200).json({
        message:"User login Successfull"
    })

}
module.exports = {registeruser,loginuser}
