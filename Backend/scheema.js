const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    train_number: {
    type: String,
    require: true,
  },
  train_name: {
    type: String,
    require: true,
  },
  departure_station: {
    type: String,
    require: true,
  },
  destination_station: {
    type: String,
    require: true,
  },
  description : {
    type : String,
    require : true
  },
  average_rating : {
    type : Number,
    require : true
  },
  reviews : {
    type : String,
    require : true
  },
  timings : {
    type : String,
    require : true
  }
});
const userData=new mongoose.Schema({
  Name: {
    type: String,
    require: true,
  },
  Email: {
    type: String,
    require: true,
  },
  Password: {
    type: String,
    require: true,
  },

  ConfirmPassword: {
    type: String,
    require: true,
  },
})
const dataModel = mongoose.model("TrainsList", schema);
const usersList=new mongoose.model("usersList",userData)
module.exports = {dataModel,usersList};
