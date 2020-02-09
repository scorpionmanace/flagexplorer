import data from "../data/continents.json";

// Storing map formations globally
let continentCountriesMap;
let countriesFlagMap;

// Extracting continent entries
export const getContinents = () => data.map(entry => entry.continent);

// Forming map for continent to [countries] array mapping
const getContinentCountriesMap = () =>
  data.reduce((prev, entry) => {
    const { continent, countries } = entry;
    prev[continent] = countries.map(country => country.name);
    return prev;
  }, {});

//   Forming countries to Flag mapping
export const getCountriesFlagMap = () =>
  data.reduce((prev, { countries }) => {
    let countryMap = countries.reduce((prev, { name, flag }) => {
      prev[name] = flag;
      return prev;
    }, {});
    return { ...prev, ...countryMap };
  }, {});

// Extracting countries
export const getCountriesOfContinent = continentName => {
  continentCountriesMap = continentCountriesMap || getContinentCountriesMap();
  return continentCountriesMap[continentName];
};

// Extracting flags per country map
export const getFlagListByCountry = countries => {
  countriesFlagMap = countriesFlagMap || getCountriesFlagMap();
  return countries.map(country => {
    return {
      country,
      flag: countriesFlagMap[country]
    };
  });
};
