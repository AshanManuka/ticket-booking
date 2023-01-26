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
    organizerContact : {
        type : String,
        required : true
    },
    organizerPassword : {
        type : String,
        required : true
    }
})

const Organizer = mongoose.model('organizer',organizerSchema);
module.exports = Organizer;