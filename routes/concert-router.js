var express = require('express');
const Concert = require('../model/concertModel');
var router = express.Router();

router.get("/allconcert", async (req, res) => {
    try {
        const expenses = await Concert.find();
        res.send(expenses);
    } catch (error) {
        // return res.status(500).json({ msg: "Sorry, something went wrong" });
        return error
    }
});

router.post('/saveconcert',async(req,res)=>{
    const data=await Concert.create(req.body);
    res.send(data)
})


module.exports = router;