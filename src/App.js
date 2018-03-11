import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import data from './JSONStructure';
import getData from './data';

const Header = ({ name, country }) => (
  <h1>
    {name}, {country}
  </h1>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
};

const CurrentForcast = ({ main, description }) => (
  <h3>
    Current Forcast: {main} - {description}
  </h3>
);

CurrentForcast.propTypes = {
  main: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const CurrentTemperature = ({ temp, temp_min, temp_max }) => (
  <Fragment>
    <h3>Temperature (c)</h3>
    <ul>
      <li>Average: {temp}</li>
      <li>Min: {temp_min}</li>
      <li>Max: {temp_max}</li>
    </ul>
  </Fragment>
);

CurrentTemperature.propTypes = {
  temp: PropTypes.number.isRequired,
  temp_min: PropTypes.number.isRequired,
  temp_max: PropTypes.number.isRequired
};

const CurrentDay = ({ dt, dt_txt, children }) => (
  <div key={`current-${dt}`} className="current-date">
    <h2>{dt_txt}</h2>
    <div className="current-date__data">{children}</div>
  </div>
);

CurrentDay.propTypes = {
  dt: PropTypes.number.isRequired,
  dt_txt: PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired
};

const ForcastDay = ({ dt, dt_txt, children }) => (
  <button key={`forcast-${dt}`} className="forcast__day forcast__day--selected">
    {dt_txt}
    {children}
  </button>
);

ForcastDay.propTypes = {
  dt: PropTypes.number.isRequired,
  dt_txt: PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired
};

const ForcastImage = ({ icon, alt }) => (
  <img src={`icons/${icon}.png`} alt={alt} />
);

ForcastImage.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

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
        <Header
          name={this.state.data.city.name}
          country={this.state.data.city.country}
        />
        {this.state.data.list.map(day => (
          <CurrentDay {...day}>
            <CurrentForcast {...day.weather[0]} />
            <CurrentTemperature {...day.main} />
          </CurrentDay>
        ))}
        <nav className="forcast">
          {this.state.data.list.map(day => (
            <ForcastDay {...day}>
              <ForcastImage icon={day.weather[0].icon} alt={day.dt_txt} />
            </ForcastDay>
          ))}
        </nav>
      </div>
    );
  }
}

export default App;
