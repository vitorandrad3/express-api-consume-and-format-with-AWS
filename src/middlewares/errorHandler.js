const errorHandler = (err, req, res, next) => { //eslint-disable-line
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || 'Unexpected error';
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
    });
};

module.exports = { errorHandler };

