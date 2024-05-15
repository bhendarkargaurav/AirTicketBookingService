const { StatusCodes } = require('http-status-codes');

class ServiceError extends Error {

    // class ServiceError extends Error {
    //     constructor(message, statusCode) {
    //         super(message); // Call super constructor before using 'this'
    //         this.statusCode = statusCode;
    //         this.name = this.constructor.name;
    //     }
    // }
    
   
    constructor(
        message = 'Somethin went wrong',
        explanation = 'Service layer error',
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR
    ){
        this.name = 'ServiceError';
        this.message = message;
        this.explanation = explanation;
        this.statusCoden = statusCode;
    }
}


module.exports = ServiceError;