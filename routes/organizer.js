const express = require('express');
const organizer = require('../model/organizerModel');

const router = express.Router();


//Save Function
router.post('/post/save',(req,res) =>{
    let newOrganizer = new organizer(req.body);
    newOrganizer.save((err)=>{
        if(err){
            return res.status(400).json({
                error : err
            });
        }
        return res.status(200).json({
            success : "Saved successfully...."
        });
    })
});

module.exports = router;
