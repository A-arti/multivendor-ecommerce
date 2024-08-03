import mongoose from 'mongoose';

module.exports.dbConnect = async()=>{
    try{
        await mongoose.connect(process.env.DB_URL,{useNewURLParser: true})
        console.log("Database is Connected")

    }
    catch(error){
        console.log(error.message)

    }
}