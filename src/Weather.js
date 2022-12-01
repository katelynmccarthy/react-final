import React from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
import { useState } from "react";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready:false});
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            date: new Date(response.data.dt * 1000),
            wind: response.data.wind.speed,
            city: response.data.name,
            description: response.data.condition.description,
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
    <WeatherInfo data={weatherData} />
    
</div>
;
} else {
    const apiKey = "7106ea97b4b3928fe085f9a75bao0f8t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
}
}