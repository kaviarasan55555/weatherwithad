// CountryCard.js
import React from 'react';
import WeatherButton from './WeatherButton';

function CountryCard({ country }) {
  const { name, latlng, capital, cca2, region } = country;

  return (
    <div className="card col-lg-4 col-sm-12 mb-3">
      <div className="card-header">{name.common}</div>
      <img
        className="card-img-top"
        src={`https://flagcdn.com/${cca2.toLowerCase()}.svg`}
        alt="Country Flag"
        style={{ height: '150px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">Capital: {capital?.[0] || 'N/A'}</h5>
        <p className="card-text">Latlng: {latlng?.join(', ') || 'N/A'}</p>
        <p className="card-text">Region: {region}, Country Code: {cca2}</p>
        <WeatherButton lat={latlng[0]} lon={latlng[1]} countryCode={cca2} />
      </div>
    </div>
  );
}

export default CountryCard;
