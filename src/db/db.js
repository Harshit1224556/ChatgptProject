const mongoose = require('mongoose')
async function connecttoDb(){
await mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("Connected to Db")
})
.catch((err)=>{
    console.log("Error while fetching the documents")
})

}

module.exports = connecttoDb

