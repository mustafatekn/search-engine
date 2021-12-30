import React, { useState } from "react";
import { useSearchDispatch } from "../context/search"
import { useUIDispatch } from "../context/ui";
import axios from "axios";

export default function SearchForm() {

  const [searchResults,setSearchResults] = useState([]);
  const [searchString, setSearchString] = useState();

  const dispatch = useSearchDispatch();
  const uiDispatch = useUIDispatch();

  const search = (e,searchString) => {
    e.preventDefault();
    if (searchString.trim() === "") throw Error("Search string cannot be empty");
    const items = [];

    uiDispatch({type:'LOADING_UI'})
    axios
      .get("http://localhost:3000/data")
      .then((res) => {
        const data = res.data;
        console.log(data);
        data.forEach(item => {
          // searching for name surname, company or country
          if (item[0].toLowerCase().includes(searchString) || item[1].toLowerCase().includes(searchString) || item[4].toLowerCase().includes(searchString)) items.push(item);
        })
    
        dispatch({type:'SET_SEARCH_RESULTS', payload: items});
        setSearchResults(items);
        uiDispatch({type:'STOP_LOADING_UI'})
      })
      .catch((err) => {
        console.log(err);
      });
    clearInputs();
  
  };

  const clearInputs = () => {
    document.getElementById("searchInput").value = "";
    setSearchString();
  };

  return (
    <form id="searchForm" onSubmit={(e) => search(e,searchString.toLowerCase())}>
      <input
        type="text"
        id="searchInput"
        placeholder="Tu"
        onChange={(e) => setSearchString(e.target.value)}
      />
      <button type="submit" className="btn" id="searchButton">
        Search
      </button>
    </form>
  );
}
