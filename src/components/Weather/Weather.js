import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({ main, description }) => (
  <p>
    {main} - {description}
  </p>
);

Weather.propTypes = {
  main: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Weather;
