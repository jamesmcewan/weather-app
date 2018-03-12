import React from 'react';
import PropTypes from 'prop-types';

const Temperature = ({ temp, temp_min, temp_max }) => (
  <div className="temperature">
    <h3>Temperature (c)</h3>
    <ul>
      <li className="temperature__avg">Average: {temp}</li>
      <li className="temperature__min">Min: {temp_min}</li>
      <li className="temperature__max">Max: {temp_max}</li>
    </ul>
  </div>
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
