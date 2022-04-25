
import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { GET_ID, REVIEW_SEARCH } from './globals'

const App = () => {
  const [search, setSearch] = useState("")
  const [selectedMovie, setSelectedMovie] = useState(null)
  // this should be a single movie object once you've select one

  //input field
const movieSearch = prompt("What movie would you like to see?");

movieSearch();
  
  useEffect(() => {
    async function getMovies() {
      const res = await axios.get(`${GET_ID}/${movieSearch}`)
      console.log(res)
    }
    getMovies()
  }, [])

  return (
    <div>

    </div>
  )
}

export default App