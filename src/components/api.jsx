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
    const searchs = await axios.get(
        `${baseUrl}/search/movie?query=${search}&api_key=${API}`
    )
    return searchs.data.results;
}
const getMovieDetails = async (id) => {
    const movie = await axios.get(`${baseUrl}/movie/${id}?api_key=${API}`)
    return movie.data
}

const getAllGenre = async () => {
    const genre = await axios.get(`${baseUrl}/genre/movie/list?api_key=${API}`)
    return genre.data.genres
}

const getMovieByGenre = async (id) => {
    const movieByGenre = await axios.get(`${baseUrl}/discover/movie?api_key=${API}&with_genres=${id}`)
    return movieByGenre.data.results
}


export {getTopRatedMovie, getPopularMovie, searchMovie, getMovieDetails, getAllGenre, getMovieByGenre}