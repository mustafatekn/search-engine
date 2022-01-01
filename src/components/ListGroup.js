import React from "react";
import { useSearchState, useSearchDispatch } from "../context/search";

export default function ListGroup({ setIsVisible }) {
  const searchState = useSearchState();
  let searchResults = searchState && searchState.searchResults;

  const dispatch = useSearchDispatch();

  const orderByName = () => {
    searchResults = searchResults.sort(nameComparator);
    dispatch({ type: "SET_SEARCH_RESULTS", payload: searchResults });
  };

  const orderByNameDesc = () => {
    searchResults = searchResults.sort(nameComparator).reverse();
    dispatch({ type: "SET_SEARCH_RESULTS", payload: searchResults });
  };
    
  const orderByYear = () => {
    searchResults = searchResults.sort(yearComparator);
    dispatch({ type: "SET_SEARCH_RESULTS", payload: searchResults });
  };

  const orderByYearDesc = () => {
    searchResults = searchResults.sort(yearComparator).reverse();
    dispatch({ type: "SET_SEARCH_RESULTS", payload: searchResults });
  };

  const nameComparator = (a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
  };

  const yearComparator = (a, b) => {
    if (a[3].split('/')[2] < b[3].split('/')[2]) return -1;
    if (a[3].split('/')[2] > b[3].split('/')[2]) return 1;
    return 0;
  };

  return (
    <div id="listGroupWrapper">
      <ul className="listGroup" onMouseLeave={() => setIsVisible(false)}>
        <li className="listGroupItem" onClick={orderByName}>
          Name ascending
        </li>
        <li className="listGroupItem" onClick={orderByNameDesc}>
          Name descending
        </li>
        <li className="listGroupItem" onClick={orderByYear}>
          Year ascending
        </li>
        <li className="listGroupItem" onClick={orderByYearDesc}>
          Year descending
        </li>
      </ul>
    </div>
  );
}
