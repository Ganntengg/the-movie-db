const baseUrlImg = import.meta.env.VITE_IMGURL

export default function PerMovieCompanies({ detailValue }) {
    if (!detailValue?.production_companies?.length) {
        return <h1 className="text-2xl text-white">Loading...</h1>
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {detailValue.production_companies.map((prod, i) => (
        <div
            key={i}
            className="flex flex-col items-center justify-center gap-4"
        >
            <img
                src={
                prod.logo_path
                ? `${baseUrlImg}/${prod.logo_path}`
                : "/defaultCompanyPoster.jpeg"
                }
                alt={prod.name}
                className="w-32 h-32 object-contain"
            />
            <p className="text-white text-lg font-semibold text-center">
                {prod.name}
            </p>
        </div>
            ))}
        </div>
    )
}
