//import express from "express";
import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import cors from "cors";
import { dbConnection } from './database/dbConnection.js'
import fileUpload from "express-fileupload";
import { ErrorMiddleware } from "./middlewares/error.js";
import userRouter from "./routes/userRouter.js";
import taskRouter from "./routes/taskRouter.js";
/////////////

// app.use(
//     cors({
//         origin: "http://localhost:5173", // Replace with the frontend origin
//         credentials: true, // Allow credentials (cookies, authorization headers, etc.)
//     })
// );
/////////////////////

const app = express();
dotenv.config({ path: "./config/config.env" });
//this is the code to connect the frontend to the backend cors is the dependancy used and it contains an array of orifin which  contains the the frontend url to be connected and then the methords which specefies the differnet types of methordas we will be using in our project and the credentials that must be set to true


app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["GET", "PUT", "DELETE", "POST"],
        credentials: true,
    })
);


//ending of the code that connects frontend to backend
app.use(cookieParser()); //when user logins a cookie is generated to obtain that cookie at our backend we use cookie parder as  mdleware
app.use(express.json()); //this middle ware is used to convert data into json format
app.use(express.urlencoded({ extended: true })); // define different data types used in the project

app.use(fileUpload({
    tempFileDir: "/tmp/",
    useTempFiles: true,
}));
app.use("/api/v1/user", userRouter);
app.use("/api/v1/task", taskRouter);

dbConnection();
app.use(ErrorMiddleware);


export default app;