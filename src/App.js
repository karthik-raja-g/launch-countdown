import "./App.css";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
import pinterest from "./assets/pinterest.svg";

function App() {
  
  return (
    <div className="App">
      <main>
        <h1 className="title">WE'RE LAUNCHING SOON</h1>
      </main>
      <footer>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img alt="Facebook" src={facebook} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img alt="Instagram" src={instagram} />
        </a>
        <a
          href="https://www.pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img alt="Pinterest" src={pinterest}/>
        </a>  
      </footer>
    </div>
  );
}

export default App;
