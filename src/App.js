import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faPinterest,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import Flip from "./flipper";

function App() {
  return (
    <div className="App">
      <main>
        <Flip title="We are launching soon" as="counter" />
      </main>
      <footer>
        {/* <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a
          href="https://www.pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faPinterest} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a> */}
        <a
          href="https://github.com/karthik-raja-g/launch-countdown"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </footer>
    </div>
  );
}

export default App;
