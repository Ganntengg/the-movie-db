import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { searchMovie } from "../components/api"
import { useSearchParams } from "react-router-dom"
import NavigationBar from "./nav"

const baseUrlImg = import.meta.env.VITE_IMGURL

export default function Search() {
    const [hasil, setHasil] = useState([])
    const [searchParams] = useSearchParams()
    useEffect(() => {
        const query = searchParams.get('query')

        searchMovie(query).then(r => {
            setHasil(r)
        })

        
    }, [])
    const PerMovie = () => {
        if(hasil.length == 0) {
            return(
                <div className=" text-5xl h-[91vh] text-white">Film Yang Kamu Cari Tidak ada!</div>
            )
        } else {
            return hasil.map((m,i)=> {
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
        <>
        <div className='font-poppins relative'>
        <NavigationBar />
        <div className='p-5 flex flex-col items-center bg-slate-900 font-poppins'>
    {/* Movie Container */}
        <div className="w-full flex flex-wrap justify-center  items-center pt-3">        
            <PerMovie />
        </div>
    </div>
        </div>
        </>
    )
}