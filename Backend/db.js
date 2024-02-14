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



module.exports=connectDB
