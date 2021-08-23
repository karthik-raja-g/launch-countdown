import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'
import "./App.css";
import Counter from "./counter";

function App() {
  return (
    <div className="App">
      <main>
        <Counter title="We're launching soon"/>
      </main>
      <footer>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faFacebookSquare}/>
        </a>
        <a
          href="https://www.pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faPinterest}/>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faInstagram}/>
        </a>
      </footer>
    </div>
  );
}

export default App;
