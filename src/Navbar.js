import { useState } from "react";
import { useEffect } from "react";

export default function Navbar({searchData, setSearchData, movies}) {
    const [emoji, setEmoji] = useState("🍿");
    useEffect(() => {
        const interval = setInterval(() => {
          setEmoji((prevValue) => (prevValue === "🍿" ? "🍷" : "🍿"));
        }, 400);
    
        return () => {
          clearInterval(interval);
        };
      }, []);
      
    return (
    <nav className="nav-bar">
      <div className="logo">
        <h1>{emoji}movieHunt</h1>
      </div>
      <input
        className="search"
        type="text"
        placeholder="search movies"
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
      />
      <p className="numResults">
        Found <b>{movies.length}</b> results.
      </p>
    </nav>
  );
}
