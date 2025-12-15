require('dotenv').config()
const connecttoDb = require('./src/db/db')
const app = require('./src/app')
connecttoDb()
app.listen(3000,()=>{
    console.log("Server is running at the port 3000")
})