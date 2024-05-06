const jwt = require('jsonwebtoken');
const express = require("express");
const router = express.Router();
const { dataModel, FormdataModel } = require("./scheema");
const Joi = require("joi");
require("dotenv").config()

router.get("/Train", async (req, res) => {
  try {
    const NewTrain = await dataModel.find();
    console.log("NewTrain: ", NewTrain);
    res.send(NewTrain);
  } catch (err) {
    res.send({ message: false, response: "please check the code here is the error.", error: err })
  }
});
router.use(express.json());


router.post("/CreateTrain", async (req, res) => {
  const data = req.body
  const newUserTrain = new dataModel(data)
  console.log(newUserTrain)
  try {
    await newUserTrain.save()
    res.send({ message: true, data: newUserTrain })
  } catch (err) {
    res.send({ message: false, response: "please check the code here is the error.", error: err })
  }
});


////////////////////////////////////////Updating the Form of the Average Rating.

router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    const updatedCollage = await dataModel.findByIdAndUpdate(id, newData, { new: true });
    if (!updatedCollage) {
      return res.status(404).send({ message: false, response: "Document not found." });
    }
    res.send({ message: true, data: "Data updated successfully.", updatedCollage: updatedCollage });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send({ message: false, response: "Internal server error.", error: err });
  }
});





/////////////////////////
router.delete("/DeleteTrain/:id", async (req, res) => {
  try {
    const id = req.params.id
    const data = req.data
    const deleteddata = await dataModel.findByIdAndDelete(id)
    res.send({ message: true, data: "data Deleted succesfully.", data: deleteddata })
  } catch (err) {
    console.log("error");
    res.send({ message: false, response: "Please check their is an error try later", error: err })
  }
});

//////////////////Creating the form//////////////////
router.post('/formcreation', async (req, res) => {
  try {
    //Error Validation......
    const { error } = FormValidation.validate(req.body); 
    if (error) {
      return res.json({ success: false, Message: error.details[0].message });
    }
    ////Checking if the user exists or not.........
    const { Email } = req.body; 
    const user = await FormdataModel.findOne({ Email: Email });
    if (user && user.Email === Email) {
      res.json({ success: true, Message: "This user alreday exist please login with the another user name" })}
    else{
      const newData = new FormdataModel(req.body);
      const savedData = await newData.save();
      res.json({ success: true, data: savedData });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
});

// get user data

router.get('/users/:email', async (req, res) => {
  const email = req.params.email;

  try {
    // Find the user by email
    const user = await FormdataModel.findOne({ Email: email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error('Error retrieving user data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { error } = FormValidation.validate(req.body);
    
    if (error) {
      return res.json({ error: error.details[0].message });
    }

    const { Password, Email } = req.body;
    const user = await FormdataModel.findOne({ Email: Email, Password: Password });

    if (user && user.Password === Password && user.Email === Email) {

      const token = jwt.sign({ userId: user._id, email: user.Email },process.env.secret, { expiresIn: '7d' });
      
      res.json({ success: true, Message: "Login Success", token });
    } else {
      res.json({ Message: "Login Failed" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Adding train

router.patch('/users/:userEmail', async (req, res) => {
  const Email = req.params.userEmail;
  const trainDetails = req.body.trainDetails;

  try {
    const user = await FormdataModel.findOne({Email});
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.Saved.push(trainDetails);

    const updatedUser = await user.save();

    res.status(200).json({ message: 'Saved array updated successfully', user: updatedUser });
  } catch (error) {
    console.error('Error updating user document:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
})
////Deleting the Added train;
router.delete("/Deletecarttrain/:userEmail",async(req,res)=>{
  try {
    
  } catch (error) {
    
  }
})

/////////////////////////Joi Making Validation////////////////////////

const TrainFormValidation = Joi.object({
  train_number: Joi.string().length(6).required(),
  train_name: Joi.string().required(),
  departure_station: Joi.string().required(),
  destination_station: Joi.string().required(),
  description: Joi.string().required(),
  average_rating: Joi.number().required(),
  region: Joi.string().required(),
  reviews: Joi.array().items(Joi.string()).required(),
  timings: Joi.string().required(),
});

const FormValidation = Joi.object({
  FirstName: Joi.string(),
  Email: Joi.string().email(),
  Password: Joi.string(),
  ConfirmPassword: Joi.string(), 
  DOB: Joi.string(),
});

module.exports = router;
