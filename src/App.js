import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "hover.css";


import Cards from "./components/cards/Cards";
import Filters from "./components/filters/Filters";
import Pagination from "./components/pagination/Pagination";
import NavBar from "./components/NavBar/NavBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyWatchList from "./Pages/MyWatchList";

function App() {
  return (
    <Router>
      <div className="app position-relative">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mywatchlist" element={<MyWatchList />} />
      </Routes>
    </Router>
  )
}

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchData, updateFetchData] = useState([]);
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");
  let { info, results } = fetchData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json());
      updateFetchData(data);
    })()
  }, [api])

  return <div className="App">
    <div className="container">
      <div className="row position-relative">
        <Filters setSpecies={setSpecies} setGender={setGender} setStatus={setStatus} setPageNumber={setPageNumber} />
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards results={results} />
          </div>
        </div>
      </div>
    </div>
    <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
  </div>;
}

export default App;
