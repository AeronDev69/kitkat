import mongoose, { mongo } from "mongoose";

const db = mongoose.connection.useDb("client");
interface IUser {
	username: mongoose.Schema.Types.String,
	password: mongoose.Schema.Types.String,
	_id: mongoose.Schema.Types.ObjectId
}

const UserSchema = new mongoose.Schema<IUser>({
	username: {
		type: mongoose.Schema.Types.String,
		required: true,
		unique: true,
	},
	password: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
});
const User = db.model("User", UserSchema);

export { User, IUser }