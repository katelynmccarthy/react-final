import React from "react";
import axios from "axios";
import "./Weather.css";
import { useState } from "react";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready:false});
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: "Wednesday 7:00",
            wind: response.data.wind.speed,
            city: response.data.name,
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        });
    }

if (weatherData.ready) {
   return  <div className="Weather">
    <form>
        <div className="row">
            <div className="col-9">
    <input type="search" placeholder="Enter a city..."
    className="form-control"
    autoFocus="on"/>
    </div>
    <div className="col-3">
    <input type="submit" value="Search"
    className="btn btn-primary w-100"/>
    </div>
    </div>
    </form>
    <h1>{weatherData.city}</h1>
    <ul>
        <li>{weatherData.date}</li>
        <li className="text-capitalize">{weatherData.description}</li>
    </ul>
    <div className="row">
        <div className="col-6">
        <img src={weatherData.iconUrl}
        alt={weatherData.description}/>
        <span className="temperature">{Math.round(weatherData.temperature)}</span> 
        <span className="unit">°F</span>
        </div>
        <div className="col-6">
            <ul>
                <li>
                    Humidity: {weatherData.humidity}%
                </li>
                <li>
                    Wind: {weatherData.wind} mph
                </li>
            </ul>
        </div>
    </div>
</div>
;
} else {
    const apiKey = "7106ea97b4b3928fe085f9a75bao0f8t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
}
}