const MovieList = ({results}) => {
    console.log("Search Results:", results)
    // const images = results.image.map((image) =>{
    //     return
    // })
    return (
        <div className="grid">
             {results?
             results.map(movie => <img src={movie.image} alt="poster" />)
             :null}
            
        
        </div>
    )
}

export default MovieList