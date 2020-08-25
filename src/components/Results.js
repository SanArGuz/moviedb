import React from "react"
import Result from "./Result"

const Results = ({ results, openDetail }) => {
  return (
    <section className="results">
      {results.map((result) => (
        <Result key={result.imdbID} result={result} openDetail={openDetail} />
      ))}
    </section>
  )
}

export default Results
