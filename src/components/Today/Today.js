import React from 'react';
import PropTypes from 'prop-types';

const Today = ({ children }) => (
  <div className="today">
    <h3>Hourly forcasts</h3>
    <ul>{children}</ul>
  </div>
);

Today.propTypes = {
  children: PropTypes.node.isRequired
};

export default Today;
