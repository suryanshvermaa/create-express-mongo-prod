import { Request, Response, NextFunction } from "express";

/**
 *
 * @param {Function} fn - The async function to handle.
 * @description A function to handle async functions in Express.js.
 * @returns {import("express").RequestHandler} - A middleware function that handles the async function.
 */

const asyncHandler = (
	fn: (req: Request, res: Response, next: NextFunction) => Promise<unknown>
) => {
	return (req: Request, res: Response, next: NextFunction) => {
		Promise.resolve(fn(req, res, next)).catch(next);
	};
};

export default asyncHandler;
