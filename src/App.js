// App.js
import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import ExampleAd from './ExampleAd'; // Assuming ExampleAd.js is the file for the ad
import SearchBar from './SearchBar';

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
        setFilteredCountries(data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleSearch = searchTerm => {
    const trimmedSearchTerm = searchTerm.trim().toLowerCase();

    if (trimmedSearchTerm === '') {
      setFilteredCountries(countries);
      return;
    }

    const filtered = countries.filter(country =>
      country.name.common.toLowerCase().includes(trimmedSearchTerm)
    );

    setFilteredCountries(filtered);
  };

  return (
    <div className="container">
      <h1>Country Weather</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="row">
        {filteredCountries.map(country => (
          <CountryCard key={country.cca2} country={country} />
        ))}
      </div>
      <ExampleAd />
    </div>
  );
}

export default App;
