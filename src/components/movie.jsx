import {getMovie, searchMovie} from './api'
import { useEffect, useState } from 'react'

const baseUrlImg = import.meta.env.VITE_IMGURL

const Movies =  () => {
    const [movieList, setMovieList] = useState([])
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        if(e.length > 2) {
            setInputValue(e)
        } else if(e.length == 0) {
            getMovie().then(r => {
                setMovieList(r)
            })
        }
    }
    const handleClick = (inputvalue) => {
        searchMovie(inputValue).then(r => {
            setMovieList(r)
        })
    }
    useEffect( () => {
        getMovie().then(r => {
            setMovieList(r)
        })        
    }, [])

    const PerMovie = () => {
        if(movieList.length == 0) {
            return(
                <div className="text-5xl">Film Yang Kamu Cari Tidak ada!</div>
            )
        } else {
            return movieList.map((m,i)=> {
            return (
            <button key={i} className='w-44 h-[375px] bg-transparent p-3 rounded-lg text-start flex flex-col justify-start text-white group'>
                <img src={m.poster_path != null ? `${baseUrlImg}${m.poster_path}` : './../../public/default.png'} alt="movie img" className='rounded-lg mb-3 group-hover:scale-110 transition duration-300' />
                <h1 className='text-sm font-bold'>{m.title}</h1>
                <p>release: {m.release_date}</p>
                <h4>{`⭐${m.vote_average}`}</h4>
            </button>
            )
    
            })   
        }
    }
    return (
        <>
        <div className='p-5 flex flex-col items-center bg-slate-900 '>
      <h1 className='text-4xl font-bold align-middle mb-4 text-white'>Gani MovieDB</h1>
        <div className='w-full flex justify-center items-center'>
        {/* Search Bar */}
          <input type="text" name="search" id="search" placeholder='Search Movie Here...' onChange={({target}) => handleChange(target.value)} className='border rounded-lg rounded-r-none shadow-md outline-none px-3 py-2' />
          <button className='border rounded-lg rounded-l-none shadow-md px-3 py-2 bg-sky-500' onClick={() => handleClick(inputValue)}>Search</button>
        </div>
    {/* Movie Container */}
      <div className="w-full flex flex-wrap justify-center  items-center pt-5">
        <PerMovie />
      </div>
    </div>
        </>
    )
}

export default Movies