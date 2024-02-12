const express = require("express");
const app = express();
const router = express.Router();
const dataModel = require("./scheema");
app.use(express.json());

router.get("/Train", async (req, res) => {
  try {
    const NewTrain = await dataModel.find();
    console.log("NewTrain: ", NewTrain);
    res.send(NewTrain);
  } catch (err) {
    console.log("error");
  }
});
router.post("/CreateForm", async (req, res) => {
  try {
    res.send({message:true,data:"data added succesfully."})
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
