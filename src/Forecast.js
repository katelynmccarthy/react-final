import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast row mb-4">
      <div className="col-sm forecast-cards">
        <div className="card today-forecast">
          <div className="card-body">
            <div>Tue</div>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt="clear sky"
              className="forecast-icon"
            />
            <div className="forecast-temp">
              <strong>23° </strong>
              <span>15°</span>
            </div>
            <div className="precipitation">
              <i className="fa-solid fa-umbrella"></i>
              <span> 0%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}