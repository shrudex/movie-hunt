import { useState } from "react"

export default function Box({movies}){
    const [open, isOpen] = useState(true);
    return <div className="box">
        <button className="btnToggle" onClick={()=>isOpen((open) => !(open))}
        >
          {open===true?"-":"+"} </button>

        {(open===true) && (
            <ul className="list">
              {movies?.map((movie) => (
                <li key={movie.imdbID}>
                  <img src={movie.Poster} alt={`${movie.Title} poster`} />
                  <h3>{movie.Title}</h3>
                  <div>
                    <p>
                      <span>🗓</span>
                      <span>{movie.Year}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
    </div>
}