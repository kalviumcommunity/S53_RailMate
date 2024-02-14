const express = require("express");

const router = express.Router();
const {dataModel ,FormdataModel}= require("./scheema");

router.get("/Train", async (req, res) => {
  try {
    const NewTrain = await dataModel.find();
    console.log("NewTrain: ", NewTrain);
    res.send(NewTrain);
  } catch (err) {
    console.log("error");
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
    console.log("error");
  }
});
router.put("/UpdateTrainList", async (req, res) => {
  try {
    res.send({message:true,data:"data Updated succesfully."})
  } catch (err) {
    console.log("error");
  }
});
router.delete("/DeleteForm", async (req, res) => {
  try {
    res.send({message:true,data:"data Deleted succesfully."})
  } catch (err) {
    console.log("error");
  }
});


module.exports = router;
