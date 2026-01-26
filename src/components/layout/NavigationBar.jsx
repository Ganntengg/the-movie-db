import { useState } from "react"

export default function NavigationBar() {
    const [searchValue, setSearchValue] = useState('')

    const handleChange = (e) => {
        setSearchValue(e)
    }

   return(
        <div className="w-full p-3 border-b-2 bg-slate-900 flex gap-2 items-center ">
            <a href="/" className="mx-12 font-bold text-2xl cursor-pointer text-white">GMDB</a>
            <div className=' justify-center items-center absolute top-2 right-10'>
            {/* Search Bar */}
                <input type="text" name="search" id="search" placeholder='Search Movie Here...' onChange={({target}) => handleChange(target.value)} 
                className='border bg-transparent transition duration-300 origin-center placeholder:text-white focus:placeholder:text-slate-400 focus:text-black focus:bg-white rounded-lg rounded-r-none shadow-md outline-none px-3 py-2' />
                <a href={`/search?query=${searchValue}`} className='border rounded-lg rounded-l-none shadow-md px-3 py-2 bg-sky-500'>Search</a>
            </div>
        </div>
   )
    
}