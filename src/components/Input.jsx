import { useState } from 'react'

const Input = ({search, setSearch}) => {
    const [value, setValue] = useState("")
    //console.log("Value:", value)
    const handleChange = (e) => {
        e.preventDefault();
        setValue(e.target.value)
    }   
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(value)
    }
    return (
        <div className="search">
            <label>Movie Search: 
            <input type="text" onChange={handleChange} /></label>
            <input onClick={handleSubmit} type="submit" value="Submit" />
        </div>
    )
}

export default Input