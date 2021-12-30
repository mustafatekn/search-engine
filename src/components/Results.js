import React, { useState } from "react";
import Navbar from "./Navbar";
import OrderBy from "../img/orderby.png";
import { useSearchState } from "../context/search";
import { useUIState } from "../context/ui";
import ResultItem from "./ResultItem";
import ListGroup from "./ListGroup";

export default function Results() {
  const [isVisible, setIsVisible] = useState(false);

  const searchState = useSearchState();
  const searchResults = searchState && searchState.searchResults;

  const uiState = useUIState();
  const isLoading = uiState && uiState.loading;

  return (
    <div>
      <Navbar />
      {!isLoading ? (
        searchResults && searchResults.length > 0 ? (
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

            {searchResults &&
              searchResults.map((res, index) => (
                <ResultItem key={index} res={res} />
              ))}

            <div className="btnWrapper">
              <button type="button" className="btn btn-outline">
                Previous
              </button>
              <button type="button" className="btn btn-outline">
                1
              </button>
              <button type="button" className="btn btn-outline">
                2
              </button>
              <button type="button" className="btn btn-outline">
                3
              </button>
              <button type="button" className="btn btn-outline">
                4
              </button>
              <button type="button" className="btn btn-outline">
                5
              </button>
              <button type="button" className="btn btn-outline">
                Next
              </button>
            </div>
          </div>
        ) : (
          <h4 id="noResult">Search something.</h4>
        )
      ) : (
        <p id="noResult">Loading...</p>
      )}
    </div>
  );
}
