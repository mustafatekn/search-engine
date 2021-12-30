import React, { useEffect, useState } from "react";
import Logo from "../img/logo.png";
import axios from "axios";
import SearchForm from "./SearchForm";
import ResultSummaryItem from "./ResultSummaryItem";

export default function Landing() {
  const [data, setData] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const getResults = () => {
    axios
      .get("http://localhost:3000/data")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const search = (e) => {
    e.preventDefault();
    if (searchString.toLowerCase().trim() === "") throw Error("Search string cannot be empty");

    const items = [];

    data.map((item) => {
      if (item[0].toLowerCase().includes(searchString) || item[1].toLowerCase().includes(searchString)) items.push(item);
    });
    setSearchResult(items);
    clearInputs();
  };

  const clearInputs = () => {
    document.getElementById("searchInput").value = "";
    setSearchString("");
  };

  useEffect(() => {
    getResults();
  }, []);

  return (
    <div className="container">
      <div id="logoWrapper">
        <img src={Logo} id="logo" alt="logo" />
        <p id="logoParagraph">Search web app</p>
      </div>

      <div id="landingContainer">
        <SearchForm search={search} setSearchString={setSearchString} />
        {searchResult.length > 0 && (
          <div id="resultSummary">
            {searchResult && searchResult.map((res, index) => (
                index < 3 && <ResultSummaryItem key={index} res={res} />
              ))}
            {searchResult.length > 3 && <p id="showMore">Show more...</p>}
          </div>
        )}
      </div>
    </div>
  );
}
