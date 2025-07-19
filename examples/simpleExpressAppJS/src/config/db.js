import mongoose from "mongoose";
import "dotenv/config";

/**
 * @description Connect to MongoDB
 * @returns {Promise<void>}
 */
const mongoUri = process.env.MONGO_URI;
const dbConnect = async () => {
	try {
		await mongoose.connect(mongoUri);
		console.log("db connected successfully");
	} catch (err) {
		console.error(err.message);
	}
};
export default dbConnect;
