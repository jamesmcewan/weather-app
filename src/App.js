import React from 'react';
import data from './JSONStructure';
import getData from './data';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data
    };
  }

  componentWillMount() {
    this.getWeatherData();
  }

  getWeatherData() {
    getData()
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
        <h1>
          {this.state.data.city.name}, {this.state.data.city.country}
        </h1>
        {this.state.data.list.map(day => (
          <div key={day.dt} className="current-date">
            <h2>{day.dt_txt}</h2>
            <div className="current-date__data">
              <h3>
                Current Forcast: {day.weather.main} - {day.weather.description}
              </h3>
              <h3>Temperature (c)</h3>
              <ul>
                <li>Average: {day.main.temp}</li>
                <li>Min: {day.main.temp_min}</li>
                <li>Max: {day.main.temp_max}</li>
              </ul>
            </div>
          </div>
        ))}
        <nav className="forcast">
          {this.state.data.list.map(day => (
            <button
              key={day.dt}
              className="forcast__day forcast__day--selected"
            >
              {day.dt_txt}
              <img src={`icons/${day.weather[0].icon}.png`} alt={day.dt_txt} />
            </button>
          ))}
        </nav>
      </div>
    );
  }
}

export default App;
