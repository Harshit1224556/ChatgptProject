const {Server, Socket} = require('socket.io')

function initSocketServer(httpserver){

    const io = new Server(httpserver,{})
    io.on("connection",(socket)=>{
        console.log("New Socket Connection",socket.id)
    })
}

module.exports = initSocketServer