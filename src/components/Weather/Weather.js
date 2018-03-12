import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({ main, description }) => (
  <p>
    {main} - {description}
  </p>
);

Weather.propTypes = {
  main: PropTypes.string,
  description: PropTypes.string
};

Weather.defaultProps = {
  main: '',
  description: ''
};

export default Weather;
