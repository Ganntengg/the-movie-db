export default function PerGenre({detailValue}) {
    if(detailValue.length == 0) {
        return <h1 className="text-2xl w-full">Loading...</h1>
    } else {
        return detailValue.genres.map((genre, i) => {
            return (
            <li key={genre.id} className="">{genre.name}</li>
            )
        })
    }
}