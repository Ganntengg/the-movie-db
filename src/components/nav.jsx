export default function NavigationBar() {
   return(
        <div className="w-full p-3 border-b-2 bg-slate-900 flex gap-2 items-center ">
            <a href="gani" className="mx-12 font-bold text-2xl cursor-pointer text-white">GMDB</a>
            <a href="#" className="text-lg text-white">Popular</a>
            <a href="#" className="text-lg text-white">Recent</a>
        </div>
   )
    
}