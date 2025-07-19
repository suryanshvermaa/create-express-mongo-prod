/**
 * @description: Custom error class for handling application errors
 * @class AppError
 * @extends Error
 * @param {string} message - The error message
 * @param {number} statusCode - The HTTP status code associated with the error
 * @example
 * throw new AppError('Not Found', 404);
 */
export class AppError extends Error {
	public statusCode: number;
	constructor(message: string, statusCode: number) {
		super(message);
		this.statusCode = statusCode;
		Error.captureStackTrace(this, this.constructor);
	}
}
