import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <small className="row">
        <div className="col-md-6">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          <span> by </span>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
          >
            Katelyn McCarthy
          </a>
        </div>
        <div className="host col-md-6">
          <span>Hosted on </span>
          <a href="/" target="_blank" rel="noreferrer">
            Netlify
          </a>
        </div>
      </small>
    </footer>
  );
}