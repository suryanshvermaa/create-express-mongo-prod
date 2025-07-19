import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/error";

/**
 * @description Error handling middleware
 * @param err
 * @param req
 * @param res
 * @param _next
 */
const errorHandler = (
	err: Error | AppError,
	req: Request,
	res: Response,
	_next: NextFunction
) => {
	const statusCode = err instanceof AppError ? err.statusCode : 500;
	res.status(statusCode).json({
		success: false,
		message: err.message || "Internal Server Error",
		data: {},
	});
};

export default errorHandler;
