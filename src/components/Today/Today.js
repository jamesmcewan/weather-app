import React from 'react';
import PropTypes from 'prop-types';
import Hourly from '../Hourly/Hourly';
import Weather from '../Weather/Weather';
import Temperature from '../Temperature/Temperature';

const Today = ({ cd }) => (
  <div className="today">
    <h3>Hourly forcasts</h3>
    <ul>
      {cd.map(day => (
        <Hourly {...day} key={`h__${day.dt}`}>
          <Weather {...day.weather[0]} />
          <Temperature {...day.main} />
        </Hourly>
      ))}
    </ul>
  </div>
);

Today.propTypes = {
  cd: PropTypes.arrayOf(PropTypes.shape({}))
};

Today.defaultProps = {
  cd: [{ weather: [] }]
};

export default Today;
