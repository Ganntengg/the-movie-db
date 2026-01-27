import { useEffect, useState } from "react"
import { getSeriesDetails } from "../api/api"
import { useParams } from "react-router-dom"
import PerMovieCompanies from "./Detail/PerMovieCompanies"
import PerGenre from "./Detail/PerGenre"

const baseUrlImg = import.meta.env.VITE_IMGURL

const SeriesDetails =  () => {
    const {id} = useParams()

    const [detailValue, setDetailValue] = useState([])

    useEffect( () => {
        getSeriesDetails(id).then(r => setDetailValue(r))
    },[])
    
    return (
        <>
            {/* HERO SECTION */}
            <div className="relative w-full min-h-screen text-white">
                {/* BACKDROP */}
                <div className="relative h-[60vh] w-full">
                    <img
                        src={`${baseUrlImg}/${detailValue.backdrop_path}`}
                        alt=""
                        className="w-full h-full object-cover brightness-50"
                    />

                    {/* BACK BUTTON */}
                    <a
                        href="/"
                        className="absolute top-5 left-5 border-2 border-white w-10 h-10 flex items-center justify-center rounded-full hover:animate-[goLeft_1s_ease-in-out_infinite]"
                    >
                        <i className="fa-solid fa-arrow-left"></i>
                    </a>
                </div>

                {/* MOVIE INFO */}
                <div className="relative flex gap-10 px-32 -mt-24">
                    {/* POSTER */}
                    <img
                        src={`${baseUrlImg}/${detailValue.poster_path}`}
                        alt=""
                        className="w-40 rounded shadow-lg"
                    />
                    {/* TEXT INFO */}
                    <div className="flex flex-col gap-2">
                        <h1 className="text-5xl font-bold">{detailValue.name}</h1>
                        <div className="flex items-center text-yellow-300 font-semibold">
                            <i className="fa-solid fa-star mr-2"></i>
                            {Math.round(detailValue.vote_average * 10) / 10}
                        </div>
                        {/* GENRE */}
                        <ul className="flex gap-2">
                            <PerGenre detailValue={detailValue} />
                        </ul>
                    <p className="text-gray-400">{detailValue.release_date}</p>
                    </div>
                </div>
                {/* OVERVIEW */}
                <div className="px-32 mt-10 max-w-5xl">
                    <p className="text-gray-200 leading-relaxed">
                        {detailValue.overview}
                    </p>
                </div>
            </div>
            {/* PRODUCTION */}
            <p className="w-full text-center text-white text-3xl font-bold my-10">
            Production With
            </p>
            <div className="w-full flex items-center justify-center">
                <PerMovieCompanies detailValue={detailValue} />
            </div>
        </>
    )
}

export default SeriesDetails