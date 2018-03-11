import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Currently = ({ dt, dt_txt, children }) => (
  <div key={`current-${dt}`} className="current-date">
    <h2>{moment(dt_txt).format('dddd, MMMM Do YYYY, h:mm:ss a')}</h2>
    <div className="current-date__data">{children}</div>
  </div>
);

Currently.propTypes = {
  dt: PropTypes.number.isRequired,
  dt_txt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Currently;
