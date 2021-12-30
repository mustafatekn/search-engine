import React, { useState } from "react";
import Navbar from "./Navbar";
import OrderBy from "../img/orderby.png";

export default function Results() {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div>
      <Navbar />
      <div id="resultsMain">
        <div id="orderByWrapper" onMouseLeave={(e) => setIsVisible(false)}>
          <img src={OrderBy} alt="orderBy" id="orderBy" onMouseOver={(e) => setIsVisible(true) }/>
          <span id="orderByText" onMouseOver={(e) => setIsVisible(true)} >Order By</span>
          {isVisible ? <div id="listGroupWrapper">
            <ul className="listGroup" onMouseLeave={(e) => setIsVisible(false)}>
              <li className="listGroupItem">Name ascending</li>
              <li className="listGroupItem">Name descending</li>
              <li className="listGroupItem">Year ascending</li>
              <li className="listGroupItem">Year descending</li>
            </ul>
          </div> : ""}
          
        </div>

        <div className="result">
          <div className="resultHeader">
            <h5 className="resultLocation">Turkey - İstanbul</h5>
            <h5 className="resultEmail">Email: abc@xyz.com</h5>
          </div>
          <small className="resultPerson">Jane Doe - 2016</small>
        </div>

        <div className="result">
          <div className="resultHeader">
            <h5 className="resultLocation">Turkey - İstanbul</h5>
            <h5 className="resultEmail">Email: abc@xyz.com</h5>
          </div>
          <small className="resultPerson">Jane Doe - 2016</small>
        </div>

        <div className="result">
          <div className="resultHeader">
            <h5 className="resultLocation">Turkey - İstanbul</h5>
            <h5 className="resultEmail">Email: abc@xyz.com</h5>
          </div>
          <small className="resultPerson">Jane Doe - 2016</small>
        </div>

        <div className="result">
          <div className="resultHeader">
            <h5 className="resultLocation">Turkey - İstanbul</h5>
            <h5 className="resultEmail">Email: abc@xyz.com</h5>
          </div>
          <small className="resultPerson">Jane Doe - 2016</small>
        </div>

        <div className="result">
          <div className="resultHeader">
            <h5 className="resultLocation">Turkey - İstanbul</h5>
            <h5 className="resultEmail">Email: abc@xyz.com</h5>
          </div>
          <small className="resultPerson">Jane Doe - 2016</small>
        </div>

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
    </div>
  );
}
