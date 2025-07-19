import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import response from "../utils/response";

/**
 * @description Create a new user
 * @route POST /api/v1/users
 * @access Public
 * @param {Request} req
 * @param {Response} res
 */
export const createUser = asyncHandler(async (req: Request, res: Response) => {
	response(res, 201, "user created", { user: "testing uer" });
});
