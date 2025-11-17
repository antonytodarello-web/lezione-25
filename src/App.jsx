import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PrimaParte from "./components/Heder";
import Benvenuti from "./components/Benvenuti";
import Bottone from "./components/Bottone";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <>
      <PrimaParte />

      <Benvenuti MyName="Stefano" />
      {}
      <Benvenuti MyName="Matteo" />
      {}
      <Benvenuti MyName="Giorgia" />
      {}

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Bottone />
      <div>
        <ImageComponent src="https://placecats.com/300/200" alt="Test alt" />
      </div>
    </>
  );
}

export default App;
