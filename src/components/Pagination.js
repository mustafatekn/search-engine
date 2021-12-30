import React from "react";

export default function Pagination({
  resultsPerPage,
  totalResults,
  setCurrentPage,
  currentPage,
}) {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="btnWrapper">
        
      {currentPage && currentPage !== 1 && (
        <button type="button" className="btn btn-outline">
          Previous
        </button>
      )}

      {pageNumbers.map((number, index) => (
        <button
          type="button"
          className="btn btn-outline"
          key={index}
          onClick={() => setCurrentPage(number)}
          className={currentPage && currentPage===number ? "btn btn-outline active" : "btn btn-outline"}
        >
          {number}
        </button>
      ))}

      {pageNumbers && pageNumbers.length !== currentPage && (
        <button type="button" className="btn btn-outline">
          Next
        </button>
      )}
    </div>
  );
}
