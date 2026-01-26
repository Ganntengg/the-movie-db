import { Link } from "react-router-dom"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const baseUrlImg = import.meta.env.VITE_IMGURL

export default function PerMovie({ popularMovie }) {
    if(popularMovie.length === 0) {
        return(
            <div className=" text-5xl h-[91vh]">Loading...</div>
        )
    } 
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={"auto"}
            modules={[Navigation]}
            pagination={{ clickable: true }}
            grabCursor={true}
            style={{marginInline: "20px", display: "flex", justifyContent: "center", alignItems: "center"}}
        >
            {popularMovie.map((m) => (
                <SwiperSlide
                    key={m.id}
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