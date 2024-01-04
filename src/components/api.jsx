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
const searchMovie = async (search) => {
    const search = await axios.get(
        `${baseUrl}/search/movie?query=${search}&api_key=${API}`
    )
    return search.data.results;
}
const getMovieDetails = async (id) => {
    const movie = await axios.get(`${baseUrl}/movie/${id}?api_key=${API}`)
    return movie.data
}


export {getTopRatedMovie, getPopularMovie, searchMovie, getMovieDetails}