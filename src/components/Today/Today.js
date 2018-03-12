import React from 'react';
import PropTypes from 'prop-types';
import Hourly from '../Hourly/Hourly';
import Weather from '../Weather/Weather';

const Today = ({ cd }) => (
  <div className="today">
    <h3>Hourly forcasts</h3>
    <ul className="today__items">
      {cd.map(day => (
        <Hourly {...day} key={`h__${day.dt}`}>
          <Weather {...day.weather[0]} />
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
