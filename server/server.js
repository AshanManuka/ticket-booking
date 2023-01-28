const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const Organizer = require('../model/organizerModel');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 8000

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));
const postRoutes = require('../routes/organizer');

app.use(bodyParser.json);
app.use(postRoutes);

const uri = 'mongodb+srv://ashan:ashanmanuka@cluster0.s6lxv7d.mongodb.net/Cluster0?retryWrites=true&w=majority';

mongoose.connect(uri).then(()=>{
    console.log("connected to Database...");
}).catch((err) => console.log('DB Error : ',err));

server.listen(port, ()=>{
    console.log("Server is Started...")
});




