import React, { useEffect, useState } from "react";
import Logo from "../img/logo.png";
import axios from "axios";
import SearchForm from "./SearchForm";
import ResultItem from "./ResultItem";
import { useDataDispatch } from "../context/data";
import { Link } from "react-router-dom";

export default function Landing() {
  const [data, setData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  
  const dispatch = useDataDispatch();

  const getResults = () => {
    axios
      .get("http://localhost:3000/data")
      .then((res) => {
        dispatch({type:'SET_DATA', payload: res.data});
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      
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
        <SearchForm setSearchResult={setSearchResult}/>
        {searchResult.length > 0 && (
          <div id="resultSummary">
            {searchResult && searchResult.map((res, index) => (
                index < 3 && <ResultItem key={index} res={res} />
              ))}
            {searchResult.length > 3 && <Link to="/results" id="showMore">Show more...</Link>}
          </div>
        )}
      </div>
    </div>
  );
}
