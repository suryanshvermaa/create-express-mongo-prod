/**
 * Custom error class for handling application errors.
 * @extends Error
 * @param {string} message - The error message.
 * @param {number} statusCode - The HTTP status code associated with the error.
 * @example
 * throw new AppError('Not Found', 404);
 */
export class AppError extends Error {
	statusCode;
	constructor(message, statusCode) {
		super(message);
		this.statusCode = statusCode;
		Error.captureStackTrace(this, this.constructor);
	}
}
