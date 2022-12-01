
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Cleveland"/>
      <footer>
        This project was coded by <a href="https://katelyn-mccarthy-portfolio.netlify.app/" target="blank" rel="noreferrer">Katelyn McCarthy</a> and is{" "}
        <a href="https://github.com/katelynmccarthy/react-final"
      target="_blank" rel="noreferrer">
         open-sourced on Github
      </a>
      </footer>
      </div>
    </div>
  );
}