var express = require('express');
const User = require('../model/userModel');
var router = express.Router();

router.get("/allusers", async (req, res) => {
    try {
        const expenses = await User.find();
        res.send(expenses);
    } catch (error) {
        // return res.status(500).json({ msg: "Sorry, something went wrong" });
        return error
    }
});

router.post('/saveuser',async(req,res)=>{
    const data=await User.create(req.body);
    res.send(data)
})


module.exports = router;