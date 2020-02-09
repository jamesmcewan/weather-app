import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Weather from '../Weather/Weather';
import Temperature from '../Temperature/Temperature';
import Box from '../styles/Box';
import Heading2 from '../styles/Heading2';

const Currently = ({ dt_txt, weather, main }) => (
  <Box data-selector="currently">
    <Heading2>
      {moment(dt_txt).format('dddd, MMMM Do YYYY, h:mm:ss a')}
    </Heading2>
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
