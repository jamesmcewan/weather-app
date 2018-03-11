import React from 'react';
import data, { forcastData } from '../../data';
import Currently from '../Currently/Currently';
import Forcast from '../Forcast/Forcast';
import Forcasts from '../Forcasts/Forcasts';
import Header from '../Header/Header';
import Hourly from '../Hourly/Hourly';
import SVGIcon from '../SVGIcon/SVGIcon';
import Temperature from '../Temperature/Temperature';
import Today from '../Today/Today';
import Weather from '../Weather/Weather';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data
    };
  }

  componentWillMount() {
    this.getforcastData();
  }

  getforcastData() {
    forcastData()
      .then(response =>
        this.setState({
          data: response
        })
      )
      .catch(reason => console.log(reason));
  }

  render() {
    return (
      <div className="weather-app">
        <Header
          name={this.state.data.city.name}
          country={this.state.data.city.country}
        />

        <Currently {...this.state.data.list[0]}>
          <Weather {...this.state.data.list[0].weather[0]} />
          <Temperature {...this.state.data.list[0].main} />
        </Currently>

        <Today>
          {this.state.data.list.map(day => (
            <Hourly {...day}>
              <Weather {...day.weather[0]} />
              <Temperature {...day.main} />
            </Hourly>
          ))}
        </Today>

        <Forcasts>
          {this.state.data.list.map(day => (
            <Forcast {...day}>
              <SVGIcon icon={day.weather[0].icon} alt={day.dt_txt} />
            </Forcast>
          ))}
        </Forcasts>
      </div>
    );
  }
}

export default App;
