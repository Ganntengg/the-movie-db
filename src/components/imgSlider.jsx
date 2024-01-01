import {useState, useEffect} from 'react'
import {getTopRatedMovie} from './api'
import AliceCarousel from 'react-alice-carousel'
import './css/slider.css'
import { Link } from 'react-router-dom';


const baseUrlImg = import.meta.env.VITE_IMGURL

export default function ImageSlider() {
    const [topRated, setTopRated] = useState([])

    useEffect(() => {
    getTopRatedMovie().then(r => {
        setTopRated(r)
    })
    console.log(topRated)

}, [])


    return (
        <div className='bg-slate-900'>
            <AliceCarousel autoPlay autoPlayInterval={3000} infinite={true} disableButtonsControls={true}>
                {topRated.map((m,i) => {
                return (
                    <Link key={i} to={`/movies/${m.id}`}>
                        <h1 className='absolute z-10 text-white top-48 text-5xl left-24 font-bold'>{m.original_title}</h1>
                        <h1 className='absolute z-10 text-white top-[16.1rem] text-3xl left-24'>{m.release_date}</h1>
                        <h1 className='absolute z-10 text-white top-64 text-3xl left-72'><i className="fa-solid fa-star mr-2  text-yellow-400"></i>{`${Math.round(m.vote_average * 10) / 10}`}</h1>
                        <h1 className='absolute z-10 text-white top-80 text-sm font-normal italic left-24'>{m.overview}</h1>
                        <img src={`${baseUrlImg}${m.backdrop_path}`} alt="" className='w-full h-[400px] origin-center object-cover brightness-[.3] shadow-lg' />
                    </Link>
                )
            })}
            </AliceCarousel>
        </div>
    )
}