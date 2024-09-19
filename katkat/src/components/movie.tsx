import { IMovieMetaData } from "../interfaces"

export default ({Poster, Title, Year}: IMovieMetaData) => {


    return (
        <div className="w-[155px] flex flex-col items-center">
            <img src={Poster} className="w-[155px] h-[220px] cursor-pointer hover:opacity-50" />
            <p className="text-secondary text-center overflow-x-hidden min-h-[3em] leading-[1.5em] line-clamp-2 my-3">{Title}</p>
            <p className="text-white text-center overflow-x-hidden">{Year}</p>
        </div>
    )
}