import { useState } from "react";

export default function Navbar({searchData, setSearchData, movies}) {
  return (
    <nav className="nav-bar">
      <div className="logo">
        
        <h1>🍿movieHunt</h1>
      </div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
      />
      <p className="numResults">
        Found <b>{movies.length}</b> results.
      </p>
    </nav>
  );
}
