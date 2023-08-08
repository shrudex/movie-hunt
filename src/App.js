import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Box from "./Box";
import Box2 from "./Box2";
import StarRating from "./StarRating";

const key = "7793f8ae";

function App() {
  const movieData = [
    {
      imdbID: "tt1375666",
      Title: "Inception",
      Year: "2010",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    },
    {
      imdbID: "tt0133093",
      Title: "The Matrix",
      Year: "1999",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
      imdbID: "tt6751668",
      Title: "Parasite",
      Year: "2019",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    },
    {
      imdbID: "tt6753268",
      Title: "Ghosted",
      Year: "2023",
      Poster: "https://images.justwatch.com/poster/305192332/s332/ghosted-2023",
    },
  ];

  const watchedData = [
    {
      imdbID: "tt1375666",
      Title: "Inception",
      Year: "2010",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      runtime: 148,
      imdbRating: 8.8,
      userRating: 10,
    },
    {
      imdbID: "tt0088763",
      Title: "Back to the Future",
      Year: "1985",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      runtime: 116,
      imdbRating: 8.5,
      userRating: 9,
    },
  ];

  const [movies, setMovies] = useState(movieData);
  const [watched, setWatched] = useState(watchedData);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(" ");
  const [searchData, setSearchData] = useState("inception");

  //data fetching from API
  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError(" ");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${searchData}`
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");
          const data = await res.json();

          //if no response from API, handle errors
          if (data.Response === "False") throw new Error("Movie not found.");

          setMovies(data.Search);
          setIsLoading(false);
        } catch (err) {
          setError(err.message);
        }
      }

      if (searchData.length<3) {
        setMovies([]);
        setError(" ");
        return;
      }

      fetchMovies();
    },
    [searchData]
  );

  return (
    <div className="App">
      <Navbar
        searchData={searchData}
        setSearchData={setSearchData}
        movies={movies}
      />
      <main className="main">
        <Box movies={movies} isLoading={isLoading} error={error} />
        <Box2 movies={movies} watched={watched} />
      </main>
      <div className="rating" style={{ display: "none" }}>
        <div style={{ backgroundColor: "white" }} className="bg">
          <StarRating maxRating={10} />
          <StarRating maxRating={5} />
          <StarRating maxRating={7} />
          <StarRating />
          <StarRating maxRating={12} color="pink" size="39" />
          <StarRating maxRating={12} color="pink" size="39" defaultRating={1} />
          <StarRating maxRating={12} color="pink" size="39" defaultRating={3} />
          <StarRating maxRating={12} color="pink" size="39" defaultRating={3} />
          <StarRating
            maxRating={2}
            color="pink"
            size="39"
            messages={["shubh", "ishita"]}
          />
          <StarRating
            size={38}
            maxRating={5}
            messages={["Terrible", "Bad", "Okay", "Good", "Excellent"]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
