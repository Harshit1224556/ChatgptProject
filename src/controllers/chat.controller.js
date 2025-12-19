const chatmodel = require('../models/chat.model')
async function createchat(req,res){
    const {title} = req.body
    const user = req.user
    const chat = await chatmodel.create({
        user:user._id,
        title
    })

    res.status(201).json({
        message:"chat created successfully",
        chat:{
            _id:chat._id,
            title:chat.title,
            lastActivity:chat.lastactivity
        }
    })
}

module.exports = {createchat}