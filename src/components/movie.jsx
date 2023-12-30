import {getMovie, searchMovie} from './api'
import { useEffect, useState } from 'react'
import NavigationBar from './nav'

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
                <div className=" text-5xl">Film Yang Kamu Cari Tidak ada!</div>
            )
        } else {
            return movieList.map((m,i)=> {
            return (
            <button key={i} className=' w-44 border-2 relative bg-transparent  rounded-lg text-start flex flex-col font-semibold justify-start text-white overflow-hidden group'>
                <img src={m.poster_path != null ? `${baseUrlImg}${m.poster_path}` : './../../public/default.jpeg'} alt="movie img" 
                    className='rounded-lg group-hover:scale-110 filter group-hover:blur-sm transition duration-300' />
                <h1 className='p-1.5 absolute group-hover:scale-100 origin-left transition duration-300 scale-0 bottom-10 text-sm font-bold'>{m.title}</h1>
                <p className='p-1.5 absolute group-hover:scale-100 origin-left transition duration-300 scale-0 bottom-5'>{m.release_date}</p>
                <h4 className='p-1.5 absolute group-hover:scale-100 origin-left transition duration-300 scale-0 bottom-0'>{`⭐${m.vote_average}`}</h4>
            </button>
            )
    
            })   
        }
    }
    return (
        <>
        <NavigationBar />
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