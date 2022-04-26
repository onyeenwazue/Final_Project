import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { GET_ID, REVIEW_SEARCH } from './globals'
import Input from './components/Input'
import MovieList from './components/MovieList'

const App = () => {
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState(null)
console.log("Search:", search)

  useEffect(() => {
    async function getMovies() {
       const res = await axios.get(`${GET_ID}/${search}`)
       setSearchResults(res.data.results) 
      console.log(res)
    } 
    getMovies()
  }, [search])

  return (
    <div>
        <Input search={search} setSearch={setSearch}/>
        <MovieList results={searchResults}/>
      
    </div>
  )
}

export default App