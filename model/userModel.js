const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    userMail : {
        type : String,
        required : true
    },
    userContact : {
        type : String,
        required : true
    },
    userPassword : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('user',userSchema)