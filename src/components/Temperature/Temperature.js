import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Temperature = ({ temp, temp_min, temp_max }) => (
  <Fragment>
    <h3>Temperature (c)</h3>
    <ul>
      <li>Average: {temp}</li>
      <li>Min: {temp_min}</li>
      <li>Max: {temp_max}</li>
    </ul>
  </Fragment>
);

Temperature.propTypes = {
  temp: PropTypes.number.isRequired,
  temp_min: PropTypes.number.isRequired,
  temp_max: PropTypes.number.isRequired
};

export default Temperature;
