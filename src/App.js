import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
import AppHeader from "./components/AppHeader";
import Stepper from "./components/Stepper";
import { ListTypes, StepperType } from "./commons/enums";
import {
  getContinents,
  getCountriesOfContinent,
  getCountriesFlagMap,
  getFlagListByCountry
} from "./helpers/dataHelper";

function App() {
  console.log({
    getContinents: getContinents(),
    getCountriesFlagMap: getCountriesFlagMap()
  });

  const [selectedContinent, setSelectedContinent] = useState([]);
  const [countriesList, setCountriesList] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedFlags, setSelectedFlags] = useState([]);
  const [continentFilterValue, setcontinentFilterValue] = useState("");
  const [countryFilterValue, setCountryFilterValue] = useState("");

  const updateContinentHandler = continent => {
    setCountriesList([]);
    setSelectedContinent([continent]);
    setCountriesList(getCountriesOfContinent(continent));
    setSelectedCountries([]);
  };

  const continentFilterValueHandler = val => {
    setcontinentFilterValue(val);
  };

  const countryFilterValueHandler = val => {
    setCountryFilterValue(val);
  };

  const getFilteredContinents = () => {
    return getContinents().filter(
      continent =>
        continent.toLowerCase().indexOf(continentFilterValue.toLowerCase()) !==
        -1
    );
  };

  const getFilteredCountries = () => {
    return countriesList.filter(
      country =>
        country.toLowerCase().indexOf(countryFilterValue.toLowerCase()) !== -1
    );
  };

  const stepper1 = (
    <Stepper
      componentId="ContinentStepper"
      heading="Step 1"
      subHeading="Select a continent."
      listItems={getFilteredContinents()}
      listType={ListTypes.single}
      stepperType={StepperType.write}
      onSelectionChange={updateContinentHandler}
      onInputChange={continentFilterValueHandler}
      selections={selectedContinent}
    />
  );
  const stepper2 =
    selectedContinent.length > 0 ? (
      <Stepper
        componentId="CountryStepper"
        heading="Step 2"
        subHeading="Now, Select Countries."
        listItems={getFilteredCountries()}
        listType={ListTypes.multi}
        stepperType={StepperType.write}
        onInputChange={countryFilterValueHandler}
        onSelectionChange={country => {
          const isCountryPresent = selectedCountries.includes(country);
          if (isCountryPresent) {
            setSelectedCountries(
              selectedCountries.filter(_country => _country !== country)
            );
          } else {
            setSelectedCountries([...selectedCountries, country]);
          }
        }}
        selections={selectedCountries}
      />
    ) : null;

  const stepper3 =
    selectedCountries.length > 0 ? (
      <Stepper
        componentId="FlagsStepper"
        heading="Step 3"
        subHeading="Selected Countiries Flags"
        listItems={getFlagListByCountry(selectedCountries)}
        listType={ListTypes.single}
        stepperType={StepperType.read}
      />
    ) : null;
  return (
    <div className="App">
      <AppHeader />
      {stepper1}
      {stepper2}
      {stepper3}
    </div>
  );
}

export default App;
