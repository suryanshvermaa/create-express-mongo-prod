import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
	name: string;
	password: string;
	email: string;
}

const UserSchema: Schema<IUser> = new Schema(
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
