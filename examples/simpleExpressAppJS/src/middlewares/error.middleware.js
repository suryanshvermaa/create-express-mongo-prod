import { AppError } from "../utils/error.js";

/**
 * @description Error handler middleware handles errors thrown in the application.
 * @description It sends a JSON response with the error message and status code.
 * @param {AppError|Error} err
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} _next
 */
const errorHandler = (err, req, res, _next) => {
	const statusCode = err instanceof AppError ? err.statusCode : 500;
	res.status(statusCode).json({
		success: false,
		message: err.message || "Internal Server Error",
		data: {},
	});
};

export default errorHandler;
