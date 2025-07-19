import asyncHandler from "../utils/asyncHandler.js";
import response from "../utils/response.js";

/**
 *
 * @description route for creating user
 * @route POST /api/user/signup
 * @access Public
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export const createUser = asyncHandler(async (req, res) => {
	response(res, 201, "user created signup successful", {
		id: "temp1",
		user: "temp",
	});
});
