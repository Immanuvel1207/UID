import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);  // Loading state

  const apiKey = '448e33eaa63c43a9a78182640242210';  // Replace with your WeatherAPI key

  const fetchWeather = async (e) => {
    e.preventDefault();
    
    if (city) {
      setLoading(true);  // Start loading
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
        );
        
        // Simulate a delay of 2 seconds before showing the weather
        setTimeout(() => {
          setWeatherData(response.data);
          setError('');  // Clear any previous errors
          setLoading(false);  // Stop loading
        }, 2000);  // 2 seconds delay
      } catch (err) {
        setError('City not found. Please enter a valid city name.');
        setWeatherData(null);  // Clear data on error
        setLoading(false);  // Stop loading even if there's an error
      }
    }
  };

  return (
    <div className={`weather-container ${loading ? 'loading-thunder' : ''}`}>
      <h1>Weather Forecast</h1>
      <form onSubmit={fetchWeather} className="weather-form">
        <input
          style={{marginBottom:'10px'}}
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      
      {error && <p className="error">{error}</p>}
      
      {weatherData && !loading && (
        <div className="weather-info">
          <h2>{weatherData.location.name}, {weatherData.location.country}</h2>
          <div className="weather-details">
            <img 
              src={weatherData.current.condition.icon} 
              alt={weatherData.current.condition.text} 
              className="weather-icon"
            />
            <div className="weather-text">
              <p><strong>Temperature:</strong> {weatherData.current.temp_c}°C</p>
              <p><strong>Condition:</strong> {weatherData.current.condition.text}</p>
              <p><strong>Humidity:</strong> {weatherData.current.humidity}%</p>
              <p><strong>Wind Speed:</strong> {weatherData.current.wind_kph} km/h</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
