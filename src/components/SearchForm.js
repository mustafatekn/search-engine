import React, { useState } from "react";
import { useDataDispatch, useDataState } from "../context/data";

export default function SearchForm({setSearchResult}) {

  const [searchString, setSearchString] = useState("");
  
  const state = useDataState();
  const data = state && state.data;

  const dispatch = useDataDispatch();

  const search = (e,searchString) => {
    e.preventDefault();
    if (searchString.toLowerCase().trim() === "") throw Error("Search string cannot be empty");
    const items = [];

    data.forEach((item) => {
      if (item[0].toLowerCase().includes(searchString) || item[1].toLowerCase().includes(searchString)) items.push(item);
    });
    dispatch({type:'SET_SEARCH_RESULT', payload:items})
    setSearchResult(items);
    clearInputs();
  };

  const clearInputs = () => {
    document.getElementById("searchInput").value = "";
    setSearchString("");
  };

  return (
    <form id="searchForm" onSubmit={(e) => search(e,searchString)}>
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
