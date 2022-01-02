import React from "react";
import "./App.css";
import Flip from "./flipper";
import githubIcon from "./github.svg";

function App() {
  return (
    <div className="App">
      <main>
        <Flip />
      </main>
      <footer>
        <a
          href="https://github.com/karthik-raja-g/launch-countdown"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src={githubIcon} alt="Github repo link" />
        </a>
      </footer>
    </div>
  );
}

export default App;
