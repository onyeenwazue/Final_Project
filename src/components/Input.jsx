const Input = ({search, setSearch}) => {
    console.log("Input search:", search)
    return (
        <div className="search">
            <label>Movie Search: </label>
            <input type="text" name="movie"/>
            <input type="button" onClick={(e)=>{
                e.preventDefault();
                console.log("event:", e.target.value)
                setSearch(e.target.value)
                }}/>
        </div>
    )
}

export default Input