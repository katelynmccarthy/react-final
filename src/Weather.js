import React from "react";
import "./Weather.css";

export default function Weather() {
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
    <h1>Cleveland</h1>
    <ul>
        <li>Wednesday 7:00</li>
        <li>Mostly Sunny</li>
    </ul>
    <div className="row">
        <div className="col-6">
        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
        alt="Mostly Sunny"/>
        <span className="temperature">42</span> 
        <span className="unit">°F</span>
        </div>
        <div className="col-6">
            <ul>
                <li>
                   Precipitation: 15% 
                </li>
                <li>
                    Humidity: 72%
                </li>
                <li>
                    Wind: 5 mph
                </li>
            </ul>
        </div>
    </div>
</div>;
}