import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Hourly = ({ dt_txt, children }) => (
  <li className="today__hour">
    <h4>{moment(dt_txt).format('h:mm:ss a')}</h4>
    <div className="current-date__data">{children}</div>
  </li>
);

Hourly.propTypes = {
  dt_txt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Hourly;
