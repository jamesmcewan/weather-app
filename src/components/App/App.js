import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components/macro';
import forcastData from '../../data/forcastData';
import Header from '../Header/Header';
import Currently from '../Currently/Currently';
import Forcasts from '../Forcasts/Forcasts';
import Today from '../Today/Today';
import LocaleInput from '../LocaleInput/LocaleInput';
import Box from '../styles/Box';
import theme from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyle';

const App = () => {
  const [dates, setDates] = useState({});
  const [city, setCity] = useState({});
  const [currentDay, setCurrentDay] = useState([]);
  const [error, setError] = useState('');

  const getforcastData = loc => {
    forcastData(loc)
      .then(response => {
        if (response.cod !== '200') {
          setError(response.message);
          return;
        }
        setCity(response.city);
        setDates(response.dates);
        setCurrentDay(response.dates[0]);
      })
      .catch(reason => setError(reason));
  };

  const changeDay = day => {
    const newDay = [...dates[day]];
    setCurrentDay(newDay);
  };

  const changeLocale = e => {
    const newLocale = e.target.value.replace(' ', '');
    getforcastData(newLocale);
  };

  useEffect(() => {
    getforcastData('Edinburgh, GB');
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Box maxWidth="90%" m="auto" data-selector="weather-app">
          <LocaleInput {...city} error={error} changeLocale={changeLocale} />
          <Header {...city} />

          {currentDay && <Currently {...currentDay[0]} />}

          <Today cd={currentDay} />
        </Box>
        <Forcasts dates={dates} changeDay={changeDay} />
      </ThemeProvider>
    </>
  );
};

export default App;
