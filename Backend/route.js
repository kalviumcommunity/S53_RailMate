const express = require("express");

const router = express.Router();
const {dataModel ,FormdataModel}= require("./scheema");

router.get("/Train", async (req, res) => {
  try {
    const NewTrain = await dataModel.find();
    console.log("NewTrain: ", NewTrain);
    res.send(NewTrain);
  } catch (err) {
    res.send({message:false,response:"please check the code here is the error."})
  }
});
router.use(express.json());
router.post("/CreateForm", async (req, res) => {
  const data=req.body
  const newUserData= new FormdataModel(data)
  console.log(newUserData)
  try {
    await newUserData.save()
    res.send({message:true,data:newUserData})
  } catch (err) {
    res.send({message:false,response:"please check the code here is the error."})
  }
});
router.put("/UpdateTrainList/:id", async (req, res) => {
  try {
    const id=req.params.id
    const newData=req.body
    const updatedCollage=await dataModel.findByIdAndUpdate(id,newData,{new:true})
    res.send({message:true,data:"data Updated succesfully.",updatedCollage:updatedCollage})
  } catch (err) {
    console.log("error");
    res.send({message:false,response:"please check the code here is the error."})
  }
});
router.delete("/DeleteTrain/:id", async (req, res) => {
  try {
    const id=req.params.id
    const data=req.data
    const deleteddata=await dataModel.findByIdAndDelete(id)
    res.send({message:true,data:"data Deleted succesfully.",data:deleteddata})
  } catch (err) {
    console.log("error");
    res.send({message:false,response:"Please check their is an error try later"})
  }
});


module.exports = router;
