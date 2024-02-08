require("dotenv").config()
const mongoose=require("mongoose")
const mongoURI=process.env.MONGOATLAS_URL
const connectDB= async ()=>{
    try{
       
        await mongoose.connect(mongoURI)
        console.log("DataBase Connected")

    }catch(error){
        console.log("error:",error)
        console.log("DataBase Disconnected")        
    }
}
module.exports=connectDB
