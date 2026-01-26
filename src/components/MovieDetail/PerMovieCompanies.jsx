const baseUrlImg = import.meta.env.VITE_IMGURL

export default function PerMovieCompanies({detailValue}) {
    if(detailValue.length == 0) {
        return <h1 className="text-2xl">Loading...</h1>
    } else {
        return detailValue.production_companies.map((prod, i) => {
            return (
                <div key={i} className="w-full h-[30%] flex flex-col items-center p-0 relative">
                    <img className="w-[30%] h-[20%] aspect-square object-contain mb-20" src={prod.logo_path ? `${baseUrlImg}/${prod.logo_path}` : "./../../public/defaultCompanyPoster.jpeg"} alt="Company Image" />
                    <p className="text-white text-2xl absolute bottom-0 font-bold">{prod.name}</p>
                </div>
            )
        })
    }
}