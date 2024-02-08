require("dotenv").config()
require("./data.json")
const mongoose=require("mongoose")
const mongoURI=process.env.MONGOATLAS_URL
const connectDB= async ()=>{
    try{
       
        await mongoose.connect(mongoURI)
        console.log("DataBase have been succesfully Connected")

    }catch(error){
        console.log("error:",error)
        console.log("DataBase have Disconnected ,Please check the errors.")        
    }
}



const Scheema=new mongoose.Schema({
    train_number:Number,
    train_name:String,
    departure_station:String,
    destination_station:String,
    description:String,
    reviews:String,
    timings:String,
    img_link:String,
    link:String,
    average_rating:Number,
})


// const collection=new mongoose.model("Data",Scheema)

module.exports=connectDB
