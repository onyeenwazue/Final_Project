const Input = ({search, setSearch}) => {
    console.log("Input search:", search)
    return (
        <div className="search">
            <label>Movie Search: </label>
            <input type="text" name="movie"/>
            <input type="submit" onClick={(e)=>{
                e.preventDefault();
                console.log("event:", e.target)
                setSearch(e.target.value)
                }}/>
        </div>
    )
}

export default Input