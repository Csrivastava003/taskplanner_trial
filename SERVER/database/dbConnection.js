import mongoose from "mongoose";


export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "MERN_STACK_TASK_MANAGEMENT"


    }).then(() => { //if mongoose.connect is successfully connected to database then the then callback function will be execueted 
        console.log("connected to database!");


    }).catch((err) => { //if mongoose.connect is nit properly connected the the catch error function eill be ececuted anf the error will be dislayed
        console.log(`some error occured while connecting to database! : ${err}`)
    })
}