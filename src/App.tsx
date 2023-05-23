import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

interface TypescriptCompProps {
  name: string;
}

function TypescriptComp({ name }: TypescriptCompProps) {
  useEffect(() => {
    fetch(
      "/api/products?populate=*&pagination[page]=1&pagination[pageSize]=100"
    );
  });
  return <div>{name}</div>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <TypescriptComp name="Hein" />
        </a>
      </header>
    </div>
  );
}

export default App;
