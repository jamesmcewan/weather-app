import React from 'react';
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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dates: {},
      city: {},
      currentDay: [],
      error: ''
    };

    this.changeDay = this.changeDay.bind(this);
    this.changeLocale = this.changeLocale.bind(this);
  }

  componentWillshallow() {
    this.getforcastData('Edinburgh, GB');
  }

  getforcastData(loc) {
    forcastData(loc)
      .then(response => {
        if (response.cod !== '200') {
          return this.setState({ error: response.message });
        }

        return this.setState({
          city: response.city,
          dates: response.dates,
          currentDay: response.dates[0]
        });
      })
      .catch(reason => this.setState({ error: reason }));
  }

  changeDay(day) {
    const newDay = [...this.state.dates[day]];

    this.setState({
      currentDay: newDay
    });
  }

  changeLocale(e) {
    const newLocale = e.target.value.replace(' ', '');
    this.getforcastData(newLocale);
  }

  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Box maxWidth="90%" m="auto" data-selector="weather-app">
            <LocaleInput
              {...this.state.city}
              error={this.state.error}
              changeLocale={this.changeLocale}
            />
            <Header {...this.state.city} />

            <Currently {...this.state.currentDay[0]} />

            <Today cd={this.state.currentDay} />
          </Box>
          <Forcasts dates={this.state.dates} changeDay={this.changeDay} />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
