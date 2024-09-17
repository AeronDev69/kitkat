require("dotenv").config();
const API_KEY = process.env.OMDB_API_KEY


export default (params: [{param: string, value: string}]) =>{
    let url = `http://www.omdbapi.com/?apikey=${API_KEY}`
    params.forEach(e => {
        url += `&${e.param}=${e.value}`
    }) 
    console.log(url)
    return url;
}