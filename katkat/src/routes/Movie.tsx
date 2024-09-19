import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import PageTemplate from "../components/pageTemplate";
import NotAuthorizeTemplate from "../components/notAuthorizeTemplate";

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
            <div className="mt-20">
                {
                    state === "success" &&
                    <div>
                        <iframe className="w-[70%] h-[470.61px] bg-red-50" src={"https://vidsrc.to/embed/movie/" + data.imdbID}>
                        </iframe>
                        <p>{data?.Title}</p>
                    </div>
                }
            </div>
        </PageTemplate>
    )
}