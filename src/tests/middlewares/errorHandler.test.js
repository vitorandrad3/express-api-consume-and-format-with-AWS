const { errorHandler } = require('../../middlewares/errorHandler');

describe('ErrorHandler', () => {
    it('should send a default error response', () => {
        const err = {};
        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        const next = jest.fn();

        errorHandler(err, req, res, next);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            success: false,
            status: 500,
            message: 'Unexpected error',
        });
    });

    it('should send a custom error response', () => {
        const customError = {
            statusCode: 404,
            message: 'Resource not found',
        };
        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        const next = jest.fn();

        errorHandler(customError, req, res, next);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({
            success: false,
            status: 404,
            message: 'Resource not found',
        });
    });
});
