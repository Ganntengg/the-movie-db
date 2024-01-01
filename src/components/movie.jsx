import { getPopularMovie, searchMovie, getMovieDetails} from './api'
import { useEffect, useState } from 'react'
import NavigationBar from './nav'
import { Link } from 'react-router-dom'
import ImageSlider from './imgSlider'

const baseUrlImg = import.meta.env.VITE_IMGURL

const Movies =  () => {
    const [movieList, setMovieList] = useState([])
    const [inputValue, setInputValue] = useState('')
    
    const handleChange = (e) => {
        if(e.length > 2) {
            setInputValue(e)
        } else if(e.length == 0) {
            getPopularMovie().then(r => {
                setMovieList(r)
            })
        }
    }
    const handleClick = (i) => {
        searchMovie(i).then(r => {
            setMovieList(r)
        })
    }
    useEffect( () => {
        getPopularMovie().then(r => {
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
                    <Link to={`/movies/${m.id}`} key={i}>
                <button key={i} className=' w-44 h-64 m-2 border-2 relative bg-transparent  rounded-lg text-start flex flex-col font-semibold justify-start overflow-hidden text-white group'>
                        <input type="hidden" name="id" id={m.id} />
                        <img src={m.poster_path ? `${baseUrlImg}${m.poster_path}` : './../../public/default.jpeg'} alt="movie img" 
                            className='rounded-lg group-hover:scale-110 filter group-hover:blur-sm group-hover:brightness-50 transition duration-300' />
                        <h1 className='p-1.5 absolute group-hover:scale-100 origin-left transition duration-300 scale-0 bottom-10 text-sm font-bold'>{m.title}</h1>
                        <p className='p-1.5 absolute group-hover:scale-100 origin-left transition duration-300 scale-0 bottom-5'>{m.release_date}</p>
                        <h4 className='p-1.5 absolute group-hover:scale-100 origin-left transition duration-300 scale-0 bottom-0 mt-3 text-yellow-400 tracking-widest'><i className="fa-solid fa-star mr-2  text-yellow-400"></i>{`${Math.round(m.vote_average * 10) / 10}`}</h4>
                </button>
                    </Link>
            )
    
            })   
        }
    }
    return (
        <div className='font-poppins relative'>
        <NavigationBar />
        <ImageSlider />
        <div className='p-5 flex flex-col items-center bg-slate-900 font-poppins '>
        <div className=' justify-center items-center absolute top-2 right-10'>
        {/* Search Bar */}
            <input type="text" name="search" id="search" placeholder='Search Movie Here...' onChange={({target}) => handleChange(target.value)} 
            className='border bg-transparent transition duration-300 origin-center placeholder:text-white focus:placeholder:text-slate-400 focus:text-black focus:bg-white rounded-lg rounded-r-none shadow-md outline-none px-3 py-2' />
            <button className='border rounded-lg rounded-l-none shadow-md px-3 py-2 bg-sky-500' onClick={() => handleClick(inputValue)}>Search</button>
        </div>
        <div className='flex w-[87%] text-white'>
            <h1 className='text-3xl font-bold'>Popular Movies</h1>
        </div>
    {/* Movie Container */}
        <div className="w-full flex flex-wrap justify-center  items-center pt-5">        
            <PerMovie />
        </div>
    </div>
        </div>
    )
}

export default Movies