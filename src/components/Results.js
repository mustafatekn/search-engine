import React, { useState } from "react";
import Navbar from "./Navbar";
import OrderBy from "../img/orderby.png";
import { useDataState } from "../context/data";
import ResultItem from "./ResultItem";
import ListGroup from './ListGroup';

export default function Results() {

  const [isVisible, setIsVisible] = useState(false);

  const state = useDataState();
  const searchResult = state && state.searchResult;

  return (
    <div>
      <Navbar />
      {searchResult ? <div id="resultsMain">
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

          {isVisible && <ListGroup setIsVisible={setIsVisible}/>}

        </div>
        
        {searchResult &&
          searchResult.map(
            (res, index) =>
              <ResultItem key={index} res={res} />
          )}

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
      </div> : (<h4 id="noResult">Looks like you did not search anything.</h4>)}
    </div>
  );
}
