import React, {useState} from "react";

export default function ListGroup({setIsVisible}) {

  return (
    <div id="listGroupWrapper">
      <ul className="listGroup" onMouseLeave={(e) => setIsVisible(false)}>
        <li className="listGroupItem">Name ascending</li>
        <li className="listGroupItem">Name descending</li>
        <li className="listGroupItem">Year ascending</li>
        <li className="listGroupItem">Year descending</li>
      </ul>
    </div>
  );
}
