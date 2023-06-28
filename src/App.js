import { useState } from "react";
import Navbar from "./Navbar";

function App() {
  const movies = {};
  const [searchData, setSearchData] = useState("");
  return (
    <div className="App">
      <Navbar
        searchData={searchData}
        setSearchData={setSearchData}
        movies={movies}
      />
    </div>
  );
}

export default App;
