const express = require("express");
const app = express();
const router = express.Router();
const dataModel = require("./Schema");
app.use(express.json());

router.get("/", async (req, res) => {
  try {
    const newData = await dataModel.find();
    console.log("newData: ", newData);
    res.send(newData);
  } catch (err) {
    console.log("error");
  }
});

module.exports = router;