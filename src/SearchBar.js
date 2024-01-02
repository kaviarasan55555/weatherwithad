// SearchBar.js
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
