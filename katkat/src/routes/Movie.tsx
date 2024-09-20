import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import PageTemplate from "../components/pageTemplate";
import NotAuthorizeTemplate from "../components/notAuthorizeTemplate";
import StarIcon from "../icons/starIcon";
import AddIcon from "../icons/addIcon";
import Icon from "../components/icon";

export default () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const movieId = searchParams.get("movieId")
    const {state, data} = useFetch("http://localhost:5000/api/movies/getMovie/" + movieId, {method: "GET", credentials: 'include'});

    useEffect(() =>{
        if(!movieId) navigate("/");
    }, [])

    useEffect(() =>{
        if(state === "success"){
            console.log(data)
        }
    }, [state])


    return (
        <PageTemplate>
            <NotAuthorizeTemplate />
            <div className="mt-20 relative">
                {
                    state === "success" &&
                     <div className="w-full max-w-[1280px]">
      
                    <div className="relative w-full bg-gray-900 mb-5" style={{ paddingTop: '56.25%' }}>
                        <iframe 
                        className="absolute top-0 left-0 w-full h-full p-5" 
                        src={"https://vidsrc.to/embed/movie/" + data.imdbID} 
                        allowFullScreen>
                        </iframe>
                    </div>
                    <div className="bg-gray-900 pt-5 flex justify-center w-screen md:w-auto p-5 flex-col">
                        <div className="flex flex-row w-full justify-between">
                            <div className="flex flex-row">
                                <img src={data.Poster} className="h-[220px] w-[155px] mr-5 mb-4 md:mb-0 hidden md:block" />
                                <div className="text-gray-50">
                                    <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-5">{data?.Title}</h1>
                                    <p className="text-gray-400 mb-1">{data?.Year} · {data?.Runtime}</p>
                                    <p className="mb-5">{data?.Genre}</p>
                                    <p className="max-w-[800px] break-words leading-relaxed ">{data?.Plot}</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <Icon Icon={AddIcon} color="white" onHoverColor="#CC5500" className="mb-3"/>
                                <Icon Icon={StarIcon} color="white" onHoverColor="#CC5500"/>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-900 pt-5 flex justify-center w-screen md:w-auto p-5 flex-col mt-5">
                        <h1 className="text-2xl">Comments</h1>
                        <textarea placeholder="Comment.." className="w-full bg-gray-800 mt-5 text-white h-16 p-2"/>
                    </div>
                    </div>
                }
            </div>
        </PageTemplate>
    )
}