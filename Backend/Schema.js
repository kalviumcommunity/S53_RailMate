const mongoose=require("mongoose")
const schema=new mongoose.Schema({
    train_number:{
        type:Number,
        require:true
    },
    train_name:{
        type:String,
        require:true
    },
    departure_station:{
        type:String,
        require:true
    },
    destination_station:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    reviews:{
        type:String,
        require:true
    },
    timings:{
        type:String,
        require:true
    },
    average_rating:{
        type:Number,
        require:true
    },
})
const dataModel=mongoose.model("Rail-details",schema)
module.exports=dataModel