import {getMovie, searchMovie} from './api'
import { useEffect, useState } from 'react'

const baseUrlImg = "https://image.tmdb.org/t/p/w500"

const Movies =  () => {
    const [popularMovie, setPopularMovie] = useState([])
    useEffect( () => {
        getMovie().then(r => {
            setPopularMovie(r)
        })        
    }, [])

    const searchMov = async (q) => {
        if(q.length > 2) {
            const search = await searchMovie(q)
            setPopularMovie(search)
        } else if(q.length < 1) {
            getMovie().then(r => {
                setPopularMovie(r)
            })
        }
      }
    

    const PerMovie = () => {
        if(popularMovie.length == 0) {
            return(
                <div className="text-5xl">Film Yang Kamu Cari Tidak ada!</div>
            )
        } else {
            return popularMovie.map((m,i)=> {
            return (
            <div key={i} className='w-64 h-[475px] bg-transparent border-2 p-3 rounded-lg'>
                <img src={m.poster_path != null ? `${baseUrlImg}${m.poster_path}` : './../../public/default.png'} alt="movie img" className='rounded-lg mb-3' />
                <h1 className='text-sm font-bold'>{m.title}</h1>
                <p>release: {m.release_date}</p>
                <h4>{`⭐${m.vote_average}`}</h4>
            </div>
            )
    
            })   
        }
    }
    return (
        <>
        <div className='p-5 flex flex-col items-center '>
      <h1 className='text-4xl font-bold align-middle mb-4'>Gani MovieDB</h1>
        <div className='w-full flex justify-center items-center'>
        {/* Search Bar */}
          <input type="text" name="search" id="search" placeholder='Search Movie Here...' onChange={({target}) => searchMov(target.value) } className='border rounded-lg shadow-md px-3 py-2' />
        </div>
    {/* Movie Container */}
      <div className="w-full flex flex-wrap gap-3 justify-center items-center pt-5">
        <PerMovie />
      </div>
    </div>
        </>
    )
}

export default Movies