import React, { useState } from "react";
import Navbar from "./Navbar";
import OrderBy from "../img/orderby.png";
import { useSearchState } from "../context/search";
import { useUIState } from "../context/ui";
import ResultItem from "./ResultItem";
import ListGroup from "./ListGroup";
import Pagination from "./Pagination";

export default function Results() {
  const [isVisible, setIsVisible] = useState(false);

  const searchState = useSearchState();
  const searchResults = searchState && searchState.searchResults;

  const uiState = useUIState();
  const isLoading = uiState && uiState.loading;

  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10);

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = searchResults && searchResults.slice(indexOfFirstResult, indexOfLastResult);
  const totalResults = searchResults && searchResults.length;

  return (
    <div>
      <Navbar />
      {!isLoading ? (
        currentResults &&
        currentResults.length > 0 && (
          <div id="resultsMain">
            <div id="orderByWrapper" onMouseLeave={(e) => setIsVisible(false)}>
              <img
                src={OrderBy}
                alt="orderBy"
                id="orderBy"
                onMouseOver={(e) => setIsVisible(true)}
              />

              <span id="orderByText" onMouseOver={(e) => setIsVisible(true)}>
                Order By
              </span>

              {isVisible && <ListGroup setIsVisible={setIsVisible} />}
            </div>

            {currentResults &&
              currentResults.map((res, index) => (
                <ResultItem key={index} res={res} />
              ))}

            <Pagination setCurrentPage={setCurrentPage} resultsPerPage={resultsPerPage} totalResults={totalResults} currentPage={currentPage}/>
          </div>
        )
      ) : (
        <p id="noResult">Loading...</p>
      )}
    </div>
  );
}
