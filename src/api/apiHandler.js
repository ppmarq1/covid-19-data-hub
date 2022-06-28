const apiContinentsURL = 'https://disease.sh/v3/covid-19/continents';
const apiCountriesURL = 'https://disease.sh/v3/covid-19/countries';

const fetchAllContinents = async () => {
  const response = await fetch(apiContinentsURL).then((data) => data.json());
  return response;
};

const fetchAllCountries = async () => {
  const response = await fetch(apiCountriesURL).then((data) => data.json());
  return response;
};

export default { fetchAllCountries, fetchAllContinents };
