import React from "react"
import { BiArrowBack } from "react-icons/bi"
const Detail = ({ selected, closeDetail }) => {
  return (
    <section className="detail">
      <button className="close" onClick={closeDetail}>
        <BiArrowBack />
      </button>
      <div className="content">
        <h2>
          {selected.Title}
          <span> ({selected.Year})</span>
        </h2>
        <p className="rating">Rating: {selected.imdbRating}</p>
        <div className="plot">
          <img src={selected.Poster} alt="Poster" />
          <p>
            <strong>Plot: </strong>
            {selected.Plot} <br />
            <br />
            <strong>Director:</strong> {selected.Director}
            <br />
            <br />
            <strong>Writter:</strong> {selected.Writer}
            <br />
            <br />
            <strong>Casting</strong> {selected.Actors}
            <br />
            <br />
            <strong>Awards:</strong> {selected.Awards}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Detail
