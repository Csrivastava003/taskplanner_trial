class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message); //what message is to be displayed
        this.statusCode = statusCode; //defines the status code of the error
    }

}
//error middleware starts
export const ErrorMiddleware = (err, req, res, next) => {

    err.message = err.message || "internal server error"; //display the error messge or the message internal server error
    err.statusCode = err.statusCode || 500; //display the status code of the error of the status code of the internal server error which is 500
    if (err.name === "CastError") {
        const message = `Resource not found ${err.path}`;
        err = new ErrorHandler(message, 400);
    }
    //error middleware ends it needs to return someething
    return res.status(err.statusCode).json({
        success: false,
        message: err.message,


    })
}
export default ErrorHandler;


//error handler is used for defining ehat message is to be sent to the user when an error isencountered along eith its status code