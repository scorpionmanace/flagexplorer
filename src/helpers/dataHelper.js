import data from "../data/continents.json";
let continentCountriesMap;
let countriesFlagMap;

export const getContinents = () => data.map(entry => entry.continent);

const getContinentCountriesMap = () =>
  data.reduce((prev, entry) => {
    const { continent, countries } = entry;
    prev[continent] = countries.map(country => country.name);
    return prev;
  }, {});

export const getCountriesFlagMap = () =>
  data.reduce((prev, { countries }) => {
    let countryMap = countries.reduce((prev, { name, flag }) => {
      prev[name] = flag;
      return prev;
    }, {});
    return { ...prev, ...countryMap };
  }, {});

export const getCountriesOfContinent = continentName => {
  continentCountriesMap = continentCountriesMap || getContinentCountriesMap();
  console.log(continentCountriesMap[continentName]);
  return continentCountriesMap[continentName];
};

export const getFlagListByCountry = countries => {
  countriesFlagMap = countriesFlagMap || getCountriesFlagMap();
  return countries.map(country => {
    return {
      country,
      flag: countriesFlagMap[country]
    };
  });
};
