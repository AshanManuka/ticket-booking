const express = require('express')
const app = express();
var cors = require('cors');


app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))


// get all routers
const organizer = require('./routes/organizer');
const users = require('./routes/user-router');
const concerts = require('./routes/concert-router');
const invoice = require('./routes/invoice-router');



// get all
app.use('/organizer',organizer)
app.use('/user', users)
app.use('/concerts', concerts)
app.use('/invoices', invoice)


module.exports = app;



