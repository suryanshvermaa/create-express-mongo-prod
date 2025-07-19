import express from "express";
import "dotenv/config";
import router from "./routes/index.js";
import dbConnect from "./config/db.js";
import cors from "cors";
import errorHandler from "./middlewares/error.middleware.js";
import response from "./utils/response.js";
import asyncHandler from "./utils/asyncHandler.js";

const app = express();

/**
 * @description Middlewares
 */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

/**
 * @description connect to database
 */
dbConnect().catch(() => {
	process.exit();
});

/**
 *
 * @description health route
 * @route POST /health
 * @access Public
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const createUser = asyncHandler(async (req, res) => {
	response(res, 200, "healthy route!", { state: "healthy" });
});

/**
 * @description Error handling middleware
 * @route *
 */
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("server is running on port", port);
});
