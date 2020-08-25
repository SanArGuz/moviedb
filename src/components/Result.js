import React from "react"
const Result = ({ result, openDetail }) => {
  return (
    <div className="result" onClick={() => openDetail(result.imdbID)}>
      <img src={result.Poster} alt="poster" />
      <h3>{result.Title}</h3>
    </div>
  )
}

export default Result
