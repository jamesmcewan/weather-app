import moment from 'moment';
import getData from './getData';

function getDateString(date) {
  return moment(date).format('YYYYMMDD');
}

function nextFiveDays() {
  const nine = moment('21:00', 'hh:mm');
  const tomorrow = moment(Date.now()).add(1, 'd');
  const isAfter9 = moment(Date.now()).isAfter(nine);

  const start = isAfter9 ? getDateString(tomorrow) : getDateString(Date.now());
  const week = [start];

  for (let i = 1; i < 5; i += 1) {
    week.push(getDateString(moment(start).add(i, 'd')));
  }

  return week;
}

const fiveDays = nextFiveDays();

function getDates(days, list) {
  const dates = {};
  for (let i = 0; i < 5; i += 1) {
    dates[`day${i}`] = list.filter(
      d => getDateString(d.dt_txt) === fiveDays[i]
    );
  }
  return dates;
}

export default function forcastData(loc) {
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
