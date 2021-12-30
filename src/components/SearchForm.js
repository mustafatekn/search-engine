import React from 'react'

export default function SearchForm({search, setSearchString}) {
    return (
        <form id="searchForm" onSubmit={(e) => search(e)}>
          <input
            type="text"
            id="searchInput"
            placeholder="Tu"
            onChange={(e) => setSearchString(e.target.value)}
          />
          <button type="submit" className="btn" id="searchButton">
            Search
          </button>
        </form>
    )
}
