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
const Datatype=mongoose.Schema({
  name:String,
  email:String,
  Password:Number,
  ConfirmPassword:Number,
})


const dataModel = mongoose.model("TrainsList", schema);
const FormdataModel=mongoose.model("FormList",Datatype)
module.exports = dataModel,FormdataModel;
