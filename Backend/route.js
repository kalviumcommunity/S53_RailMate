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
router.post("/create", async (req, res) => {
  const userDatas = {
    Name: req.body.Name,
    Email: req.body.Email,
    Password: req.body.Password,
    ConfirmPassword: req.body.ConfirmPassword,
  };

  const NewUserData = new usersList(userDatas);
console.log(NewUserData)
  try {
    await NewUserData.save();
    res.send({ message: "success", data: NewUserData });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "error", error: "Failed to save data" });
  }
});







/////Getting the request for the signup form
router.get("/getuser",async(req,res)=>{
  try {
    const data=await usersList.find()
    res.send({message:"success",datas:data})
  } catch (error) {
    res.send({message:"error"})
  }
})

module.exports = router;
