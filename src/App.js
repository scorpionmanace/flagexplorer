import React from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import FlagFinder from "./widgets/FlagFinder";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <FlagFinder />
    </div>
  );
}

export default App;
