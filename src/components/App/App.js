import React from 'react';
import { forcastData } from '../../data';
import Header from '../Header/Header';
import Currently from '../Currently/Currently';
import Forcasts from '../Forcasts/Forcasts';
import Today from '../Today/Today';
import LocaleInput from '../LocaleInput/LocaleInput';

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

  componentWillMount() {
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
          currentDay: response.dates.day0
        });
      })
      .catch(reason => this.setState({ error: reason }));
  }

  changeDay(day) {
    const dts = Object.assign({}, this.state.dates);
    const newDay = dts[day];
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
      <div className="weather-app">
        <div className="current-day">
          <LocaleInput
            {...this.state.city}
            error={this.state.error}
            changeLocale={this.changeLocale}
          />
          <Header {...this.state.city} />

          <Currently {...this.state.currentDay[0]} />

          <Today cd={this.state.currentDay} />
        </div>
        <Forcasts dates={this.state.dates} changeDay={this.changeDay} />
      </div>
    );
  }
}

export default App;
