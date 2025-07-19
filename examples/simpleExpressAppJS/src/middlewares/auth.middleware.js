import jwt from "jsonwebtoken";
import { AppError } from "../utils/error.js";
import asyncHandler from "../utils/asyncHandler.js";

/**
 *
 * @returns {Function} - Returns a middleware function that checks for a valid JWT token in the request headers or body
 * @throws {AppError} - Throws an error if the token is not provided or is invalid
 * @description - This middleware function checks for a valid JWT token in the request headers or body. If the token is valid, it adds the user data to the request object and calls the next middleware. If the token is invalid or not provided, it throws an AppError with a 401 status code.
 */
const auth = () => {
	return asyncHandler(async (req, res, next) => {
		const token =
			req.headers?.["token"] ||
			req.body?.["token"] ||
			req.params?.["token"] ||
			req.query?.["token"] ||
			req.headers.authorization?.split(" ")[1] ||
			"";
		if (!token) throw new AppError("Unauthorised", 401);
		const data = await verifyToken(token);
		req.user = data;
		next();
	});
};

/**
 * Creates a JWT token with the provided data and expiration time
 * @param {{userId:string|number,email?:string,data?:object}} data - Data to be included in the token
 * @param {number} time - Expiration time in minutes
 * @returns {Promise<String>} - Returns a promise that resolves to the created token
 */
const createToken = async (data, time) => {
	return new Promise(async (resolve, reject) => {
		try {
			const token = await jwt.sign(data, process.env.AUTH_SECRET, {
				expiresIn: `${time}m`,
			}); //time in minutes
			resolve(token);
		} catch (err) {
			reject(err);
		}
	});
};

/**
 * Verifies the provided JWT token
 * @param {string} token - The JWT token to verify
 * @returns {Promise<{userId:string|number,email?:string,data?:object}>} - Returns a promise that resolves to an object containing data
 */
const verifyToken = async (token) => {
	return new Promise(async (resolve, reject) => {
		try {
			const isVerified = await jwt.verify(token, process.env.AUTH_SECRET);
			if (!isVerified)
				reject(new AppError("Token expires or invalid", 401));
			const data = JSON.parse(JSON.stringify(isVerified));
			resolve(data);
		} catch (err) {
			reject(err);
		}
	});
};

export { auth, createToken, verifyToken };
