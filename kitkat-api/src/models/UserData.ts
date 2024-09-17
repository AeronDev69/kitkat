import mongoose, { Schema } from "mongoose";
import { IUserData, IMovie } from "../interfaces/index";


const db = mongoose.connection.useDb("client");

const UserDataSchema: Schema<IUserData> = new Schema({
    user_id: {required: true, unique: true, type: mongoose.Schema.Types.ObjectId},
    watch_history: {
        list_of_watched: [{id: String, title: String}],
        last_watched: {
            timestamp: mongoose.Schema.Types.Number,
            movie: {id:String, title: String}
        }
    },
    rated_movies: [{
        movie: {
            id: String,
            title: String
        },
        rated: mongoose.Schema.Types.String
    }],
    favorites: [{id: String, title: String}],
    watch_later: [{id: String, title: String}],
})

const UserData = db.model("users-data", UserDataSchema);
export default UserData;