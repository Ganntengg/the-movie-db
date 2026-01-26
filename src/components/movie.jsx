import { getPopularMovie, getAllGenre, getMovieByGenre } from './api'
import { useEffect, useState } from 'react'
import NavigationBar from './nav'
import { Link, useSearchParams } from 'react-router-dom'
import ImageSlider from './imgSlider'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"

const baseUrlImg = import.meta.env.VITE_IMGURL

const Movies =  () => {
    const [movieList, setMovieList] = useState([])
    const [genreList, setGenreList] = useState([])
    const [movieByGenre, setMovieByGenre] = useState([])
    const [selectedGenre, setSelectedGenre] = useState(28)
    
    useEffect( () => {
        getPopularMovie().then(r => {
                getMovieByGenre(selectedGenre).then(r => {
                    setMovieByGenre(r)
                })
            setMovieList(r)
        })
        getAllGenre().then(r => {
            setGenreList(r)
        })
    }, [selectedGenre])

    const PerGenre = () => {
  if (genreList.length === 0) {
    return <div className="text-5xl">Loading...</div>
  }
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={9}
      pagination={{ clickable: true }}
      grabCursor={true}
      style={{marginInline: "20px"}}
    >
      {genreList.map((g) => (
        <SwiperSlide
          key={g.id}
          onClick={() => setSelectedGenre(g.id)}
          style={{ cursor: "pointer", background: "white", padding: "4px", borderRadius: "5px", display: "flex", justifyContent: "center", alignItems: "center", width: "auto"}}
        >
          {g.name}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

    const PerMovieByGenre = () => {
        if(movieByGenre.length == 0) {
            return (
                <div className='text-2xl h-[91vh]'>Loading...</div>
            )
        }
        return (
            <Swiper
                spaceBetween={16}
                slidesPerView="auto"
                modules={[Navigation]}
                pagination={{ clickable: true }}
                grabCursor={true}
                style={{marginInline: "20px", display: "flex", justifyContent: "center", alignItems: "center"}}
            >
                {movieByGenre.map((m) => (
                <SwiperSlide
                    key={m.id}
                    onClick={() => setSelectedGenre(g.id)}
                    style={{ cursor: "pointer", }}
                    className='!w-auto bg-white rounded-md mt-5'
                >
                    <Link to={`/movies/${m.id}`} className=''>
                        <button className=' w-44 h-64 border-2 relative bg-transparent  rounded-lg text-start flex flex-col font-semibold justify-start overflow-hidden text-white group'>
                            <input type="hidden" name="id" id={m.id} />
                            <img src={m.poster_path ? `${baseUrlImg}${m.poster_path}` : './../../public/default.jpeg'} alt="movie img" 
                                className='rounded-lg group-hover:scale-110 filter group-hover:blur-sm group-hover:brightness-50 transition duration-300' />
                            <h1 className='p-1.5 absolute group-hover:scale-100 origin-left transition duration-300 scale-0 bottom-10 text-sm font-bold'>{m.title}</h1>
                            <p className='p-1.5 absolute group-hover:scale-100 origin-left transition duration-300 scale-0 bottom-5'>{m.release_date}</p>
                            <h4 className='p-1.5 absolute group-hover:scale-100 origin-left transition duration-300 scale-0 bottom-0 mt-3 text-yellow-400 tracking-widest'><i className="fa-solid fa-star mr-2  text-yellow-400"></i>{`${Math.round(m.vote_average * 10) / 10}`}</h4>
                        </button>
                    </Link>
                </SwiperSlide>
                ))}
            </Swiper>
    )
    }
    console.log(movieByGenre)

    const PerMovie = () => {
        if(movieList.length == 0) {
            return(
                <div className=" text-5xl h-[91vh]">Loading...</div>
            )
        } else {
            return movieList.map((m,i)=> {
            return (
                    <Link to={`/movies/${m.id}`} key={i}>
                        <button className=' w-44 h-64 m-2 border-2 relative bg-transparent  rounded-lg text-start flex flex-col font-semibold justify-start overflow-hidden text-white group'>
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
        <div className='font-poppins relative w-full overflow-hidden'>
            <NavigationBar />
            <ImageSlider />
            <div className='p-5 flex flex-col items-center bg-slate-900 font-poppins '>
                <div className='flex w-[87%] text-white'>
                    <h1 className='text-3xl font-bold'>Popular Movies</h1>
                </div>
                {/* Movie Container */}
                <div className="w-full flex flex-wrap justify-center items-center pt-5">        
                    <PerMovie />
                </div>
                <div className='relative w-screen'>
                    <PerGenre />
                    <PerMovieByGenre />
                </div>
            </div>
        </div>
    )
}

export default Movies