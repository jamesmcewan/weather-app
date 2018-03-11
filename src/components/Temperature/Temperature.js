import React from 'react';
import PropTypes from 'prop-types';

const Temperature = ({ temp, temp_min, temp_max }) => (
  <div className="temperature">
    <h3>Temperature (c)</h3>
    <ul>
      <li>Average: {temp}</li>
      <li>Min: {temp_min}</li>
      <li>Max: {temp_max}</li>
    </ul>
  </div>
);

Temperature.propTypes = {
  temp: PropTypes.number.isRequired,
  temp_min: PropTypes.number.isRequired,
  temp_max: PropTypes.number.isRequired
};

export default Temperature;
