import moment from 'moment';

function getDateString(date) {
  return moment(date).format('YYYYMMDD');
}

function nextFiveDays() {
  const nine = moment('21:00', 'hh:mm');
  const tomorrow = moment(Date.now()).add(1, 'd');
  const isAfter9 = moment(Date.now()).isAfter(nine);
  const start = isAfter9 ? getDateString(tomorrow) : getDateString(Date.now());
  const days = [1, 2, 3, 4];
  const week = [
    start,
    ...days.map(i => getDateString(moment(start).add(i, 'd')))
  ];

  return week;
}

const fiveDays = nextFiveDays();

function getData(loc) {
  const url = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  const location = loc;
  const appId = process.env.REACT_APP_SOURCE;

  return fetch(`${url}${location}&appid=${appId}`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => error);
}

function getDates(days, list) {
  const dates = days.map((d, i) =>
    list.filter(dt => getDateString(dt.dt_txt) === days[i])
  );

  return dates;
}

function forcastData(loc) {
  const location = loc || 'Edinburgh,GB';
  return getData(location)
    .then(response => {
      if (response.cod === '200') {
        const list = [...response.list];
        const dates = getDates(fiveDays, list);

        return { cod: response.cod, city: response.city, dates };
      }
      return response;
    })
    .then(response => response)
    .catch(error => error);
}

export {
  forcastData as default,
  getDates,
  getData,
  nextFiveDays,
  getDateString
};
