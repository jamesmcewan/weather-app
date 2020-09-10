import React from 'react';
import PropTypes from 'prop-types';
import Hourly from '../Hourly/Hourly';
import Weather from '../Weather/Weather';
import List from '../styles/List';
import Box from '../styles/Box';
import Heading3 from '../styles/Heading3';

const Today = ({ cd }) => (
  <Box pb="200px" bg="rgba(255, 255, 255, 0.5)">
    <Heading3>Hourly forcasts</Heading3>
    <List flexWrap="wrap">
      {cd.map((day) => (
        <Hourly {...day} key={`h__${day.dt}`}>
          <Weather {...day.weather[0]} />
        </Hourly>
      ))}
    </List>
  </Box>
);

Today.propTypes = {
  cd: PropTypes.arrayOf(PropTypes.shape({}))
};

Today.defaultProps = {
  cd: [{ weather: [] }]
};

export default Today;
