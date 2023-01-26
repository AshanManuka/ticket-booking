const mongoose = require('mongoose');
const Organizer = require('../model/model');
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const uri = "mongodb+srv://ashan:pIjT1F32v6IpiOZP@cluster0.mgg0k4m.mongodb.net/?retryWrites=true&w=majority";

const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
    console.log("Joined New User.....");
    console.log("-------------------------");
    socket.on('sendData' , (message) =>{
        console.log("recived message : ",message);
    })
});


server.listen(port, ()=>{
    console.log("Server is Started...")
});

mongoose.connect(uri).then(()=>{
    console.log("connected to Database...");
});