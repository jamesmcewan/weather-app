// Retrieve data from weather api

function getData(loc) {
  const url = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  const location = loc;
  const appId = 'd95f3ccf0a447f1928e3719c88c18453';

  return fetch(`${url}${location}&appid=${appId}`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => error);
}

export default getData;
