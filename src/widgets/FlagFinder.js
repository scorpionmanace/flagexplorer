import React, { useState } from "react";

import Stepper from "../components/Stepper";
import { ListTypes, StepperType } from "../commons/enums";
import {
  getContinents,
  getCountriesOfContinent,
  getFlagListByCountry
} from "../helpers/dataHelper";

import Constants from "../commons/Constants";

import "../styles/common.css";

// Parent component aka FlagFinder widget to follow step selection guid to see flags of those countries
const FlagFinder = () => {
  const [selectedContinent, setSelectedContinent] = useState([]);
  const [countriesList, setCountriesList] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
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

  const updateSeletedCountries = country => {
    const isCountryPresent = selectedCountries.includes(country);
    if (isCountryPresent) {
      setSelectedCountries(
        selectedCountries.filter(_country => _country !== country)
      );
    } else {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  const stepper1 = (
    <Stepper
      componentId="ContinentStepper"
      heading={Constants.step(1)}
      subHeading={Constants.selectContinent}
      listItems={getFilteredContinents()}
      listType={ListTypes.single}
      stepperType={StepperType.write}
      onSelectionChange={updateContinentHandler}
      onInputChange={continentFilterValueHandler}
      selections={selectedContinent}
      placeholderText={Constants.selectContinent}
    />
  );
  const stepper2 =
    selectedContinent.length > 0 ? (
      <Stepper
        componentId="CountryStepper"
        heading={Constants.step(2)}
        subHeading={Constants.selectCountries}
        listItems={getFilteredCountries()}
        listType={ListTypes.multi}
        stepperType={StepperType.write}
        onInputChange={countryFilterValueHandler}
        onSelectionChange={updateSeletedCountries}
        selections={selectedCountries}
        placeholderText={Constants.selectCountries}
      />
    ) : null;

  const stepper3 =
    selectedCountries.length > 0 ? (
      <Stepper
        componentId="FlagsStepper"
        heading={Constants.step(3)}
        subHeading={Constants.selectedCountriesFlags}
        listItems={getFlagListByCountry(selectedCountries)}
        listType={ListTypes.single}
        stepperType={StepperType.read}
        onSelectionChange={() => {
          setSelectedCountries([]);
        }}
      />
    ) : null;
  return (
    <section className="flex d-wrap d-row f-justify-space-start">
      {stepper1}
      {stepper2}
      {stepper3}
    </section>
  );
};

export default FlagFinder;
