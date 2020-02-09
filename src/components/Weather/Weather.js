import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../styles/Paragraph';

const Weather = ({ main, description }) => (
  <Paragraph>
    {main} - {description}
  </Paragraph>
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
