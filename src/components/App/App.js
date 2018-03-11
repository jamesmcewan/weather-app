import React from 'react';
import { forcastData, dates, city, currentDay } from '../../data';
import Currently from '../Currently/Currently';
import Forcast from '../Forcast/Forcast';
import Forcasts from '../Forcasts/Forcasts';
import Header from '../Header/Header';
import Hourly from '../Hourly/Hourly';
import SVGIcon from '../SVGIcon/SVGIcon';
import Temperature from '../Temperature/Temperature';
import Today from '../Today/Today';
import Weather from '../Weather/Weather';
import LocaleInput from '../LocaleInput/LocaleInput';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dates,
      city,
      currentDay,
      error: ''
    };

    this.changeDay = this.changeDay.bind(this);
    this.changeLocale = this.changeLocale.bind(this);
  }

  componentWillMount() {
    this.getforcastData();
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

          <Currently {...this.state.currentDay[0]}>
            <Weather {...this.state.currentDay[0].weather[0]} />
            <Temperature {...this.state.currentDay[0].main} />
          </Currently>

          <Today>
            {this.state.currentDay.map(day => (
              <Hourly {...day}>
                <Weather {...day.weather[0]} />
                <Temperature {...day.main} />
              </Hourly>
            ))}
          </Today>
        </div>

        <Forcasts>
          {Object.keys(this.state.dates).map((day, k) => (
            <Forcast
              {...this.state.dates[day][0]}
              day={day}
              k={k}
              changeDay={this.changeDay}
            >
              <SVGIcon
                icon={this.state.dates[day][0].weather[0].icon}
                alt={this.state.dates[day][0].dt_txt}
              />
            </Forcast>
          ))}
        </Forcasts>
      </div>
    );
  }
}

export default App;
