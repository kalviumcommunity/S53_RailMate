const express = require("express");
const app = express();
const router = express.Router();
const dataModel = require("./scheema");
app.use(express.json());

router.get("/", async (req, res) => {
  try {
    const NewTrain = await dataModel.find();
    console.log("NewTrain: ", NewTrain);
    res.send(NewTrain);
  } catch (err) {
    console.log("error");
  }
});


module.exports = router;
