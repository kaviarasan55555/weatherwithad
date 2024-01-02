import React, { useState } from 'react';

function WeatherButton({ lat, lon, countryCode }) {
  const [weatherInfo, setWeatherInfo] = useState(null);

  const fetchWeatherData = () => {
    const apiKey = 'd9ccc11ef9a03796def0f1c6a39f9f4d';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherDescription = data.weather[0].description;
        const temperature = Math.round(data.main.temp - 273.15);

        setWeatherInfo({
          weatherDescription,
          temperature,
        });
      })
      .catch(error => console.log(error));
  };

  return (
    <button className="btn btn-primary" onClick={fetchWeatherData}>
      {weatherInfo ? (
        `Weather: ${weatherInfo.weatherDescription}, Temperature: ${weatherInfo.temperature}°C`
      ) : (
        'Click for Weather'
      )}
    </button>
  );
}

export default WeatherButton;

