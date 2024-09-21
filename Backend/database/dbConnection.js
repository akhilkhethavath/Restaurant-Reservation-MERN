import mongoose from "mongoose";

export const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RESTAURANT",
    }).then(() =>{
        console.log("connected to database succesflly!");
    }).catch(err =>{
        console.log(`Some error occured while connecting to database! ${err}`);
    });

};