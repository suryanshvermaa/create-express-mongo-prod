/**
 *
 * @param {(req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => Promise<unknown>} fn - The async function to handle.
 * @description A function to handle async functions in Express.js.
 * @returns {import("express").RequestHandler} - A middleware function that handles the async function.
 */

const asyncHandler = (fn) => {
	return (req, res, next) => {
		Promise.resolve(fn(req, res, next)).catch(next);
	};
};

export default asyncHandler;
