import app from "./app.js";
import cloudinary from 'cloudinary';


//cloudinary setup starts
cloudinary.v2.config({


    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.CLOUDINARY_CLIENT_API,
    api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});


//cloudianry setup completes

app.listen(process.env.PORT, () => {
    console.log(`server listening at port ${process.env.PORT}`);
});