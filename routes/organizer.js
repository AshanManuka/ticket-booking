var express = require('express');
const organizer = require('../model/organizerModel');

const router = express.Router();


//Save Function
// router.post('/organizer/save',(req,res) =>{
//     let newOrganizer = new organizer(req.body);
//     newOrganizer.save((err)=>{
//         if(err){
//             return res.status(400).json({
//                 error : err
//             });
//         }
//         return res.status(200).json({
//             success : "Saved successfully...."
//         });
//     });
// });

//save function
router.post('/save',async(req,res)=>{
    const data=await organizer.create(req.body);
    res.send(data)
})

//get organizers
router.get("/organizers", async (req, res) => {

    try {
        const expenses = await organizer.find();
        res.send(expenses);
    } catch (error) {
        // return res.status(500).json({ msg: "Sorry, something went wrong" });
        return error
    }
});

 //update
router.put('organizer/update:id',(req,res)=>{
    organizer.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err, )=>{
            if(err){
                return res.status(400).json({error :err});
            }
            return res.status(200).json({
                success : "updated successfully"
            });
        }
    );
});


// //delete organizer
// router.delete('organizer/delete:id',(req,res)=>{
//     organizer.findByIdAndRemove(req.params.id).exec((err,deleteOrganizer)=>{
//         if(err) return res.status(400).json({
//             message : "Delete unSuccessful",err
//         });
//         return res.json({
//             message : "Delete successful",deleteOrganizer
//         });
//     });
// })



module.exports = router;
