import { useState } from "react";
// import "../style/App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";

function App() {
  return (
    <div>
      <h1 className="overflow-y-auto">
        <Navbar/>
        <Hero/>
      </h1>
    </div>
  );
}

export default App;
