const Input = (props) => {
    return (
        <div className="search">
            <label>Movie Search: </label>
            <input type="text" name="movie" />
            <button onClick>Search</button>
        </div>
    )
}

export default Input