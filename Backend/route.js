const express = require("express");
const app = express();
const router = express.Router();
const {dataModel,usersList} = require('./scheema');
app.use(express.json());
const cors = require("cors");
app.use(cors());




/////Get the train details.
router.get("/Train", async (req, res) => {
  try {
    const NewTrain = await dataModel.find();
    console.log("NewTrain: ", NewTrain);
    res.send(NewTrain);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "error", error: "Failed to fetch data" });
  }
});



///Posting the From List
router.post("/create",async(req,res)=>{
  const NewUserData=new usersList(req.body)
  console.log(req.body)
  try {
    await NewUserData.save()
    res.send({message:"success",data:NewUserData})
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "error", error: "Failed to save data" });
  }
})





/////Getting the request for the signup form
router.get("/getuser",async(req,res)=>{
  try {
    const data=await UserModel.find()
    res.send({message:"success",datas:data})
  } catch (error) {
    res.send({message:"error"})
  }
})

module.exports = router;
