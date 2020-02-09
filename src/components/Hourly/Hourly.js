import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ListItem from '../styles/ListItem';
import Heading4 from '../styles/Heading4';
import Box from '../styles/Box';

const Hourly = ({ dt_txt, children }) => (
  <ListItem minWidth="300px">
    <Heading4>{moment(dt_txt).format('h:mm:ss a')}</Heading4>
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
