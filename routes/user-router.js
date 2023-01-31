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
});

// router.get('/specsuser',async (req,res)=>{
//     try {
//         let param = req.body;
//         console.log(param);
//         const post = await User.findOne({ UserName:req.params.id});
//         res.send(post);
//     } catch {
//         res.status(404);
//         res.send({ error: "User doesn't exist!" });
//     }
//
// })

router.get('/specsuser',async (req,res)=>{
    const expenses = await User.find();
    res.send(expenses);

})


module.exports = router;