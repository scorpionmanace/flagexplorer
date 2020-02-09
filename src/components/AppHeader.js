import React from "react";
import Constants from "../commons/Constants";
import "../styles/common.css";
// App Header component that is used to display about the application
const AppHeader = () => (
  <header className="header-container bg-transparent" id="AppHeader">
    <h1 className="lead-text__heading">{Constants.flagPicker}</h1>
    <h2 className="lead-text__subheading">
      {Constants.headerText} <u>{Constants.steps + "."}</u>
    </h2>
  </header>
);

export default AppHeader;
