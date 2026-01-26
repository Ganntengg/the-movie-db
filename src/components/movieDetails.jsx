import { useEffect, useState } from "react"
import { getMovieDetails } from "../api/api"
import { useParams } from "react-router-dom"
import PerMovieCompanies from "./MovieDetail/PerMovieCompanies"
import PerGenre from "./MovieDetail/PerGenre"

const baseUrlImg = import.meta.env.VITE_IMGURL

const MovieDetails =  () => {
    const {id} = useParams()

    const [detailValue, setDetailValue] = useState([])

    useEffect( () => {
        getMovieDetails(id).then(r => setDetailValue(r))
    },[])
    
    return (
        <>
            <div className="relative w-full h-[100vh]">
                <div className="relative  h-[50vh] w-full">
                    {/* Header section */}
                    <img src={`${baseUrlImg}/${detailValue.backdrop_path}`} alt="" className={` brightness-50 object-center w-full h-full object-cover`} />
                    <img src={`${baseUrlImg}/${detailValue.poster_path}`} alt="" className="absolute -bottom-1/3 left-32 aspect-portrait w-40" />
                    {/* Back Button */}
                    <a href="/" className="absolute  top-5 left-5 bg-transparent border-2 border-white text-white hover:animate-[goLeft_1s_ease-in-out_infinite] w-10 flex items-center justify-center h-10 rounded-full">
                        <i className="fa-solid fa-arrow-left"></i>
                    </a>
                    <h1 className="text-white absolute font-bold text-5xl bottom-2 left-80">{detailValue.original_title}</h1>
                    <h1 className="text-yellow-300 absolute font-bold text-xl -bottom-7 left-80 flex items-center"><i className="fa-solid fa-star mr-2 my-3"></i>{Math.round(detailValue.vote_average * 10) / 10}</h1>
                    <div className="text-white absolute font-semibold text-xl -bottom-11 left-80 w-[300px]">
                        <ul className="flex items-center gap-2 absolute bottom-0 left-0">
                            <PerGenre detailValue={detailValue} />
                        </ul>
                        <h1 className="absolute -bottom-6  flex items-center mr-2 text-gray-500-400">{detailValue.release_date}</h1>
                        </div>
                </div>
                {/* Overview */}
                <div className="relative bottom-0 h-[30%]">
                    <h1 className="absolute top-[40%] left-32 text-white pr-10">{detailValue.overview}</h1>
                </div>
            </div>
            <p className="w-full text-center text-white text-3xl font-bold mb-10">Production With </p>
            {/* Movie Company */}
            <div className="w-full h-1/2 flex items-center justify-center">
                <PerMovieCompanies detailValue={detailValue} />
            </div>
        </>
    )
}

export default MovieDetails