const mongoose = require('mongoose');
const concertSchema = new mongoose.Schema({
    organizationName : {
        type : String,
        required : true
    },
    concertName : {
        type : String,
        required : true
    },
    ticketQty : {
        type : String,
        required : true
    },
    ticketPrice : {
        type : String,
        required : true
    },
    concertDate : {
        type : String,
        required : true
    },
    concertPlace : {
        type : String,
        required : true
    }
});
module.exports = mongoose.model('concert',concertSchema)
