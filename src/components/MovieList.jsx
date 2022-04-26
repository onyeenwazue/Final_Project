const MovieList = ({results}) => {
    console.log("Search Results:", results)
    return (
        <div className="grid">
            {results?<img src={results[0].image} alt="poster" />:null}
            
        
        </div>
    )
}

export default MovieList