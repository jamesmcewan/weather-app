import { useState, useEffect } from 'preact/hooks';
import forcastData from '++data/forcastData';
import Header from '++components/Header';
import Currently from '++components/Currently';
import Forcasts from '++components/Forcasts';
import Today from '++components/Today';
import LocaleInput from '++components/LocaleInput';

const App = () => {
  const [dates, setDates] = useState({});
  const [city, setCity] = useState({});
  const [currentDay, setCurrentDay] = useState([]);
  const [error, setError] = useState('');

  const getforcastData = (loc) => {
    forcastData(loc)
      .then((response) => {
        if (response.cod !== '200') {
          setError(response.message);
          return;
        }
        setCity(response.city);
        setDates(response.dates);
        setCurrentDay(response.dates[0]);
      })
      .catch((reason) => setError(reason));
  };

  const changeDay = (day) => {
    const newDay = [...dates[day]];
    setCurrentDay(newDay);
  };

  const changeLocale = (e) => {
    const newLocale = e.target.value.replace(' ', '');
    getforcastData(newLocale);
  };

  useEffect(() => {
    getforcastData('Edinburgh, GB');
  }, []);

  return (
    <>
        <div>
          <LocaleInput {...city} error={error} changeLocale={changeLocale} />
          <Header {...city} />

          <Currently {...currentDay[0]} />

          <Today cd={currentDay} />
        </div>
        <Forcasts dates={dates} changeDay={changeDay} />
    </>
  );
};

export default App;
