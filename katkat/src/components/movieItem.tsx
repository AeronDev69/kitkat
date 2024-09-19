import { useCallback } from "react"
import { IMovieMetaData } from "../interfaces"
import { useNavigate } from "react-router-dom"

export default ({Poster, Title, Year, imdbID}: IMovieMetaData) => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() =>{
        navigate("/movie?movieId=" + imdbID);
    }, [])

    return (
        <div className="w-[155px] flex flex-col items-center">
            <img src={Poster} className="w-[155px] h-[220px] cursor-pointer hover:opacity-50" onClick={handleOnClick}/>
            <p className="text-secondary text-center overflow-x-hidden min-h-[3em] leading-[1.5em] line-clamp-2 my-3">{Title}</p>
            <p className="text-white text-center overflow-x-hidden">{Year}</p>
        </div>
    )
}