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
    fetch(
      "/secure-api/posts?populate=*&sort[0]=createdAt:desc&pagination[limit]=6",
      {
        headers: {
          Authorization: `Bearer 9a5ac3e08486eb754137a201477760699c15fdbfd128a9ba7ab1c67c52f0b5ce5b7a348f1c185fbd6d289c3573a27f85022e41d04addc249a225ed68776025a7a6b4eb74a5cdb662dd04e2aa7ec254a291dc3c191f254e49169e62f90d3bf874234ff60a318ad15709719136b2fdbd5110b403ae3fe753bd003d81dc4f7b488a`,
        },
      }
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
          <TypescriptComp name="Hein Htet" />
        </a>
      </header>
    </div>
  );
}

export default App;
