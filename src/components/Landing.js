import React from "react";
import Logo from "../img/logo.png";
import SearchForm from "./SearchForm";
import ResultItem from "./ResultItem";
import { useSearchState } from "../context/search";
import { useUIState } from "../context/ui";
import { Link } from "react-router-dom";

export default function Landing() {
  const searchState = useSearchState();
  const searchResults = searchState && searchState.searchResults;

  const uiState = useUIState();
  const isLoading = uiState && uiState.loading;

  return (
    <div className="text-center">
      <div id="logoWrapper">
        <img src={Logo} id="logo" alt="logo" />
        <p id="logoParagraph">Search web app</p>
      </div>

      <div id="landingContainer">
        <SearchForm />
        {!isLoading ? (
          searchResults &&
          searchResults.length > 0 && (
            <div id="resultSummary">
              {searchResults.map(
                (res, index) =>
                  index < 3 && <ResultItem key={index} res={res} />
              )}
              {searchResults.length > 3 && (
                <Link to="/results" id="showMore">
                  Show more...
                </Link>
              )}
            </div>
          )
        ) : (
          <p style={{ marginTop: "2rem" }}>Loading...</p>
        )}
      </div>
    </div>
  );
}
