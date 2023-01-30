const mongoose = require("mongoose");
const  socket = require('socket.io');
const app = require("./server");
const port = 8000

mongoose.connect("mongodb://localhost:27017/booking",{
    // useNewUrlParser: true ,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify:false
    }).then(() => {
    console.log("DB Connetion Successfull");
})
    .catch((err) => {
        console.log(err.message);
    });

const server = app.listen(port, () => {
    console.log(`Server is Started..`)
})

const io = socket(server, {
    cors: {
        origin: "*",
        credentials: true,
    },
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message', (msg) => {
        console.log(msg);
        socket.broadcast.emit('message-broadcast', msg);
    });
});