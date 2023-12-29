import axios from "axios";

const baseUrl = 'https://api.themoviedb.org/3'
const API = "04c2706e8df85d3ac6ea3c6825e9bfd5"

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