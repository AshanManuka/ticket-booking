const mongoose = require('mongoose');
const organizerSchema = new mongoose.Schema({
    organizerName : {
        type : String,
        required : true
    },
    organizerMail : {
        type : String,
        required : true
    },
    organizerPassword : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('organizer',organizerSchema)