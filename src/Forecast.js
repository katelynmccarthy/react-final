import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);


  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
  return (
    <div className="Forecast row mb-4">
      <div className="col-sm forecast-cards">
        <div className="card today-forecast">
          <div className="card-body">
          <WeatherForecastDay data={forecast[0]} />
          </div>
          <div className="card-body">
          <WeatherForecastDay data={forecast[1]} />
          </div>
          <div className="card-body">
          <WeatherForecastDay data={forecast[2]} />
          </div>
          <div className="card-body">
          <WeatherForecastDay data={forecast[3]} />
          </div>
          <div className="card-body">
          <WeatherForecastDay data={forecast[4]} />
          </div>
          <div className="card-body">
          <WeatherForecastDay data={forecast[5]} />
          </div>
          <div className="card-body">
          <WeatherForecastDay data={forecast[6]} />
          </div>
          </div>
        </div>
      </div>

  );
} else {
  let apiKey = "6f7fc1e8921ca5e8743c4596d4b381f9";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return null;
}
}