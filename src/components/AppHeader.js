import React from "react";
import Constants from "../commons/Constants";

const AppHeader = () => (
  <header className="header-container bg-transparent" id="AppHeader">
    <h1>{Constants.flagPicker}</h1>
    <h2 className="lead-text">
      {Constants.headerText} <u>{Constants.steps + "."}</u>
    </h2>
  </header>
);

export default AppHeader;
