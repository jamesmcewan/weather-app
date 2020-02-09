import React from 'react';
import PropTypes from 'prop-types';
import Weather from '../Weather/Weather';
import Temperature from '../Temperature/Temperature';
import Box from '../styles/Box';
import Heading2 from '../styles/Heading2';

const displayDate = date =>
  date.toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

const Currently = ({ dt_txt, weather, main }) => (
  <Box data-selector="currently">
    <Heading2>{displayDate(new Date(dt_txt))}</Heading2>
    <Box data-selector="data">
      <Weather {...weather[0]} />
      <Temperature {...main} />
    </Box>
  </Box>
);

Currently.propTypes = {
  dt_txt: PropTypes.string,
  weather: PropTypes.arrayOf(PropTypes.shape({})),
  main: PropTypes.shape({})
};

Currently.defaultProps = {
  dt_txt: '',
  weather: [{}],
  main: {}
};

export default Currently;
