import axios from "axios";

const baseUrl = import.meta.env.VITE_BASEURL
const API = import.meta.env.VITE_API

const getMovie = async () => {
    const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${API}`)
    return movie.data.results;
}

const searchMovie = async (s) => {
    const search = await axios.get(
        `${baseUrl}/search/movie?query=${s}&api_key=${API}`
    )
    return search.data.results;
}


export {getMovie, searchMovie}