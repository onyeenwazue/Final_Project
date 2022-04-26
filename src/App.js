import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { GET_ID, REVIEW_SEARCH } from './globals'
import Input from './components/Input'

const App = () => {
  const [search, setSearch] = useState("")
  const [selectedMovie, setSelectedMovie] = useState(null)
  // this should be a single movie object once you've select one
console.log("Search:", search)
  
  useEffect(() => {
    async function getMovies() {
      // const res = await axios.get(`${GET_ID}/${search}`)
      // console.log(res)
    } 
    getMovies()
  }, [search])

  return (
    <div>
        <Input search={search} setSearch={setSearch}/>

    </div>
  )
}

export default App