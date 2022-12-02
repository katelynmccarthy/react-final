import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <small className="row">
        <div className="col-md-6">
          <a
            href="https://github.com/katelynmccarthy/react-final"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          <span> by </span>
          <a
            href="https://katelyn-mccarthy-portfolio.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Katelyn McCarthy
          </a>
        </div>
        <div className="host col-md-6">
          <span>Hosted on </span>
          <a href="https://app.netlify.com/teams/katelynmccarthy/overview?_ga=2.256998539.1053835246.1669829617-1320103757.1665079561" target="_blank" rel="noreferrer">
            Netlify
          </a>
        </div>
      </small>
    </footer>
  );
}