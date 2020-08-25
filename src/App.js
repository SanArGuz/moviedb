import React, { useState } from "react"
import axios from "axios"

import Search from "./components/Search"
import Results from "./components/Results"
import Detail from "./components/Detail"

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {
      Actors: "Michael Keaton, Emma Stone, Kenny Chin, Jamahl Garrison-Lowe",
      Awards: "Won 4 Oscars. Another 192 wins & 285 nominations.",
      Director: "Alejandro G. Iñárritu",
      Genre: "Comedy, Drama",
      Plot:
        "A washed-up superhero actor attempts to revive his fading career by writing, directing, and starring in a Broadway production.",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_SX300.jpg",
      Title: "Birdman or (The Unexpected Virtue of Ignorance)",
      Writer:
        "Alejandro G. Iñárritu, Nicolás Giacobone, Alexander Dinelaris, Armando Bo, Raymond Carver (play)",
      Year: "2014",
      imdbID: "tt2562232",
      imdbRating: "7.7",
    },
  })
  const apiurl = "http://www.omdbapi.com/?apikey=eb6ce01d"

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search

        setState((prevState) => {
          return { ...prevState, results: results }
        })
      })
    }
  }

  const handleInput = (e) => {
    let s = e.target.value

    setState((prevState) => {
      return { ...prevState, s: s }
    })
  }

  const openDetail = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data
      console.log(result)
      setState((prevState) => {
        return { ...prevState, selected: result }
      })
    })
  }

  const closeDetail = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} }
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Movies</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openDetail={openDetail} />

        {typeof state.selected.Title != "undefined" ? (
          <Detail selected={state.selected} closeDetail={closeDetail} />
        ) : (
          false
        )}
      </main>
    </div>
  )
}

export default App
