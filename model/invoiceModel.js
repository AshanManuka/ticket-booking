const mongoose = require('mongoose');
const invoiceSchema = new mongoose.Schema({
    mailAddress : {
        type : String,
        required : true
    },
    contactNumber : {
        type : String,
        required : true
    },
    ticketCount : {
        type : String,
        required : true
    },
    amount : {
        type : String,
        required : true
    }
});
module.exports = mongoose.model('invoice',invoiceSchema)