import axios from "axios";

const baseUrl = import.meta.env.VITE_BASEURL
const API = import.meta.env.VITE_API

const getTopRatedMovie = async () => {
    const movie = await axios.get(`${baseUrl}/movie/top_rated?api_key=${API}`)
    return movie.data.results;
}

const getPopularMovie = async () => {
    const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${API}`)
    return movie.data.results
}
const getMovieDetails = async () => {
    const movie = await axios.get(`${baseUrl}/movie/343611?api_key=${API}`)
    return movie.data
}
const searchMovie = async (s) => {
    const search = await axios.get(
        `${baseUrl}/search/movie?query=${s}&api_key=${API}`
    )
    return search.data.results;
}


export {getTopRatedMovie, getPopularMovie, searchMovie, getMovieDetails}