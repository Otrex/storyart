const { ERROR_MSG, APP } = require('../../../config/constants')

class AppError extends Error {
    constructor(message, statusCode) {
        super();
        this.message = message
        this.statusCode = statusCode
    }
}

function errorHandler (err, req, res, next) {
    if (err) {
        if (config.app.env === APP.ENV.PRODUCTION) {
            return res.status(err.statusCode).json({
                message: err.message
            })
        } else {
            return res.status(err.statusCode).json({
                message: err.message,
                stack: err.stack
            })
        }
    }
}

function pageNotFound (req, res, next) {
    res.status(404).json({
        message: ERROR_MSG.ROUTE_NOT_FOUND
    })
}


module.exports = {
    pageNotFound,
    errorHandler,
    AppError
}