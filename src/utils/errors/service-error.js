const { StatusCodes } = require('http-status-codes');

class ServiceError extends Error {
    constructor(
        message = 'Somethin went wrong',
        explanation = 'Service layer error',
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR
    ) {
        this.name = 'ServiceError';
        this.message = message;
        this.explanation = explanation;
        this.statusCoden = statusCode;
    }
}


module.exports = ServiceError;