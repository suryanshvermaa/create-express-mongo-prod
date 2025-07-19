import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
			select: false,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
