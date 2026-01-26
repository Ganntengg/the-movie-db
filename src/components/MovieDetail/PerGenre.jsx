

export default function PerGenre({detailValue}) {
        if(detailValue.length == 0) {
            return <h1 className="text-2xl">Loading...</h1>
        } else {
            return detailValue.genres.map((genre, i) => {
                return (
                    <li key={i} className="hover:underline cursor-pointer">{genre.name}</li>
                )
            })
        }
    }