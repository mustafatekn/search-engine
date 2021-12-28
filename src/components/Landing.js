import React from "react";
import Logo from "../img/logo.png";
export default function Landing() {
  return (
    <div className="container">
      <div id="logoWrapper">
        <img src={Logo} id="logo" alt="logo" />
        <p id="logoParagraph">Search web app</p>
      </div>

      <div id="landingContainer">
        <form id="searchForm">
          <input type="text" className="searchInput" placeholder="Tu" />
          <button type="submit" className="btn" id="searchButton">
            Search
          </button>
        </form>
        <div id="resultSummary">
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
          <p id="showMore">Show more...</p>
        </div>
      </div>
    </div>
  );
}
