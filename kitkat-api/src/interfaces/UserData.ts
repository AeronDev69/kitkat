import { Document } from "mongoose"
interface IMovie{
    id: string,
    title: string,
    thumbnail: string
}

interface IUserData extends Document{
    user_id: String
    watch_history: {
        list_of_watched: Array<IMovie>
        last_watched: {
            timestamp: number,
            movie: IMovie
        }
    },
    rated_movies: [{
        movie: IMovie,
        rated: String 
    }]
    favorites: Array<IMovie>
    watch_later: Array<IMovie>
}

export {IMovie, IUserData}