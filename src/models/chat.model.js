const mongoose = require('mongoose')


const chatSchema = new mongoose.Schema({
   user:{

    type:mongoose.Schema.Types.ObjectId,
    ref:'user',
    require:true
   },
   title:{
    type:String,
    require:true
   },
   lastactivity:{
    type:Date,
    default:Date.now
   }

},{
    timestamps:true
})

const chatmodel = mongoose.model('chatmodel',chatSchema)
module.exports = chatmodel
