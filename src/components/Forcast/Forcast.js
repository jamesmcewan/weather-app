import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Forcast = ({ k, day, dt_txt, children, changeDay }) => (
  <button
    key={`forcast-${k}`}
    className="forcast__day"
    onClick={() => changeDay(day)}
  >
    {moment(dt_txt).format('ddd')}
    {children}
  </button>
);

Forcast.propTypes = {
  k: PropTypes.number.isRequired,
  day: PropTypes.string.isRequired,
  dt_txt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  changeDay: PropTypes.func.isRequired
};

export default Forcast;
