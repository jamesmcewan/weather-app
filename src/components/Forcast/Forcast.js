import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Forcast = ({ dt, dt_txt, children }) => (
  <button key={`forcast-${dt}`} className="forcast__day">
    {moment(dt_txt).format('ddd')}
    {children}
  </button>
);

Forcast.propTypes = {
  dt: PropTypes.number.isRequired,
  dt_txt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Forcast;
