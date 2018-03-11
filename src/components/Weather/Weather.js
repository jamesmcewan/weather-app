import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({ main, description }) => (
  <h3>
    {main} - {description}
  </h3>
);

Weather.propTypes = {
  main: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Weather;
