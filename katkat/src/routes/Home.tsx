import { useCallback, useEffect, useState } from "react"
import useAuthorize from "../hooks/useAuthorize";
import SearchBar from "../components/searchBar";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IMovieMetaData } from "../interfaces";


export default () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [search, setSearch] = useState("");
    const [searchData, setSearchData] = useState<Array<IMovieMetaData>>([]);
    const [searchNotFound, setSearchNotFound] = useState(false);

    const isAuthorize = useAuthorize();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const query = searchParams.get('search');

    useEffect(() => {
        if (query === null) return;
        (async() => {
            const response = await fetch("http://localhost:5000/api/movies/search?q=" + query, {
                credentials: 'include'
            });
            const data = await response.json();
            if(data.Response === "False") {
                setSearchNotFound(true);
            }

            data.Search.map((movie: any) => {
                setSearchData(prevItem => [...prevItem, movie])
            })
        })();
    }, [query])

    const handleSearch = useCallback(() => {
        navigate("?search=" + search);
    }, [search])



    return (
        <div className="w-screen h-screen flex justify-center overflow-x-hidden">
            <div className={`flex w-[1088px] relative flex-col items-center ${query === null && "justify-center"}`}>
                <div className="*:text-white p-5 absolute right-0 top-0 *:mx-5 *:cursor-pointer">
                    <a className="hover:text-secondary">Login</a>
                    <a className="bg-secondary p-2 rounded-md hover:bg-gray-50 hover:text-gray-950">Sign Up</a>
                </div>
                {query === null ? 
                    <SearchBar handleOnclick={handleSearch} setValue={setSearch}/> :
                    <SearchBar handleOnclick={handleSearch} setValue={setSearch} className={"h-16 mt-24 mb-24"}/> 
                }
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

                    {
                        searchData.length > 0 && searchData.map((movie, idx) => (
                            <div key={idx}>
                                <img src={movie.Poster} width={154.44} height={217}/>
                            </div>
                        ))
                    }
                </div>
                
            </div>
        </div>
    )
}