import React from "react";
import "./App.css";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <article>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>

        {/* <Header /> */}
        <main className="main">
          <Home />
        </main>
      </article>
    </>
  );
}

export default App;
