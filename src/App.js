import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
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
    {main} - {description}
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
    <h2>{moment(dt_txt).format('dddd, MMMM Do YYYY, h:mm:ss a')}</h2>
    <div className="current-date__data">{children}</div>
  </div>
);

CurrentDay.propTypes = {
  dt: PropTypes.number.isRequired,
  dt_txt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

const ForcastDay = ({ dt, dt_txt, children }) => (
  <button key={`forcast-${dt}`} className="forcast__day">
    {moment(dt_txt).format('ddd')}
    {children}
  </button>
);

ForcastDay.propTypes = {
  dt: PropTypes.number.isRequired,
  dt_txt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

const ForcastImage = ({ icon, alt }) => (
  <img className="forcast__image" src={`icons/${icon}.svg`} alt={alt} />
);

ForcastImage.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

const Today = ({ children }) => <ul>{children}</ul>;

Today.propTypes = {
  children: PropTypes.node.isRequired
};

const Hourly = ({ dt, dt_txt, children }) => (
  <li>
    <h4>{moment(dt_txt).format('h:mm:ss a')}</h4>
    <div className="current-date__data">{children}</div>
  </li>
);

Hourly.propTypes = {
  dt: PropTypes.number.isRequired,
  dt_txt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
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

        <CurrentDay {...this.state.data.list[0]}>
          <CurrentForcast {...this.state.data.list[0].weather[0]} />
          <CurrentTemperature {...this.state.data.list[0].main} />
        </CurrentDay>

        {this.state.data.list.map(day => (
          <Today {...day}>
            <Hourly>
              <CurrentForcast {...day.weather[0]} />
              <CurrentTemperature {...day.main} />
            </Hourly>
          </Today>
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
