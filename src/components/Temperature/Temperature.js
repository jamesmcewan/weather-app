import React from 'react';
import PropTypes from 'prop-types';
import Box from '../styles/Box';
import Heading3 from '../styles/Heading3';
import List from '../styles/List';
import ListItem from '../styles/ListItem';

const Temperature = ({ temp, temp_min, temp_max }) => (
  <Box>
    <Heading3>Temperature (c)</Heading3>
    <List>
      <ListItem data-selector="avg">Average: {temp}</ListItem>
      <ListItem data-selector="min">Min: {temp_min}</ListItem>
      <ListItem data-selector="max">Max: {temp_max}</ListItem>
    </List>
  </Box>
);

Temperature.propTypes = {
  temp: PropTypes.number,
  temp_min: PropTypes.number,
  temp_max: PropTypes.number
};

Temperature.defaultProps = {
  temp: 0,
  temp_min: 0,
  temp_max: 0
};

export default Temperature;
