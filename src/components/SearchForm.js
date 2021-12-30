import React, { useState } from "react";
import { useSearchDispatch } from "../context/search";
import { useUIDispatch } from "../context/ui";
import axios from "axios";

export default function SearchForm() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchString, setSearchString] = useState();
  const [error, setError] = useState("");

  const searchDispatch = useSearchDispatch();
  const uiDispatch = useUIDispatch();

  const search = (e) => {
    e.preventDefault();
    const items = [];
    if (!searchString) {
      setError("Search string cannot be empty.");
    } else {
      setError();
    }

    uiDispatch({ type: "LOADING_UI" });
    axios
      .get("http://localhost:3000/data")
      .then((res) => {
        const data = res.data;

        data.forEach((item) => {
          // searching for name surname, company or country
          if (
            item[0].toLowerCase().includes(searchString.toLowerCase()) ||
            item[1].toLowerCase().includes(searchString.toLowerCase()) ||
            item[4].toLowerCase().includes(searchString.toLowerCase)
          )
            items.push(item);
        });

        searchDispatch({ type: "SET_SEARCH_RESULTS", payload: items });
        setSearchResults(items);
        uiDispatch({ type: "STOP_LOADING_UI" });
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
    <form id="searchForm" onSubmit={(e) => search(e)}>
      <input
        type="text"
        id="searchInput"
        placeholder="Tu"
        onChange={(e) => setSearchString(e.target.value)}
        style={
          error
            ? { border: "2px solid red" }
            : { border: "1px solid black", color: "black" }
        }
        className={error ? "redPlaceholder" : ""}
      />
      <button type="submit" className="btn" id="searchButton">
        Search
      </button>
      {error && (
        <div style={{ color: "red", fontSize: "0.75rem", marginTop: "0.5rem" }}>
          {error}
        </div>
      )}
    </form>
  );
}
