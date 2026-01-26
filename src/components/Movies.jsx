import { getPopularMovie, getAllGenre, getMovieByGenre, getSeries, getTopRatedMovie } from './../api/api'
import { useEffect, useState } from 'react'
import PerGenre from './Movie/PerGenre'
import PerPopularMovie from './Movie/PerPopularMovie'
import PerSeries from './Movie/PerSeries'
import TopRatedMovie from './Movie/TopRatedMovie'
import NavigationBar from './layout/NavigationBar'


const Movies =  () => {
    const [popularMovie, setPopularMovie] = useState([])
    const [genreList, setGenreList] = useState([])
    const [movieByGenre, setMovieByGenre] = useState([])
    const [selectedGenre, setSelectedGenre] = useState(28)
    const [TVSeries, setTVSeries] = useState([])
    const [topRatedMovie, setTopRatedMovie] = useState([])
    const [genreName, setGenreName] = useState("Action")
    
    useEffect( () => {
        getPopularMovie().then(r => {
            setPopularMovie(r)
        })
        getMovieByGenre(selectedGenre).then(r => {
            setMovieByGenre(r)
        })
        getAllGenre().then(r => {
            setGenreList(r)
        })
        getSeries().then(r => {
            setTVSeries(r)
        })
        getTopRatedMovie().then(r => {
            setTopRatedMovie(r)
        })
    }, [selectedGenre])

    

    return (
        <div className='font-poppins relative w-full overflow-hidden'>
            <NavigationBar />
            <TopRatedMovie topRatedMovie={topRatedMovie}/>
            <div className='p-5 flex flex-col items-center bg-slate-900 font-poppins '>

                {/* Movie Container */}
                <div className="relative w-screen mb-5">        
                    <h1 className='text-3xl font-bold ml-4 text-white'>Popular Movies</h1>
                    <PerPopularMovie popularMovie={popularMovie} />
                </div>
                <div className='relative w-screen mb-5'>
                    <PerGenre genres={genreList} movieByGenre={movieByGenre} setSelectedGenre={setSelectedGenre} setGenreName={setGenreName} genreName={genreName} />
                </div>
                <div className='relative w-screen'>
                    <h1 className='text-3xl font-bold text-white ml-4'>Popular TV Series</h1>
                    <PerSeries TVSeries={TVSeries} />
                </div>
            </div>
        </div>
    )
}

export default Movies