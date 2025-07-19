import mongoose from "mongoose";
import "dotenv/config";
const mongoUri = process.env.MONGO_URI!;

if (!mongoUri) {
	throw new Error("Mongo URI is not defined in the environment variables");
}

/**
 * @description Connects to the MongoDB database using Mongoose.
 * @returns {Promise<void>} A promise that resolves when the connection is successful.
 * @throws {Error} Throws an error if the connection fails.
 */
const dbConnect = async () => {
	try {
		await mongoose.connect(mongoUri);
		console.log("db connected successfully");
	} catch (err) {
		if (err instanceof Error) {
			console.error(err.message);
		} else {
			console.error("An unknown error occurred:", err);
		}
	}
};
export default dbConnect;
