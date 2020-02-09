import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../styles/ListItem';
import Heading4 from '../styles/Heading4';
import Box from '../styles/Box';

const displayTime = time => time.toLocaleTimeString('en-GB', { hour12: true });

const Hourly = ({ dt_txt, children }) => (
  <ListItem minWidth="300px">
    <Heading4>{displayTime(new Date(dt_txt))}</Heading4>
    <Box>{children}</Box>
  </ListItem>
);

Hourly.propTypes = {
  dt_txt: PropTypes.string,
  children: PropTypes.node
};

Hourly.defaultProps = {
  dt_txt: '',
  children: undefined
};

export default Hourly;
