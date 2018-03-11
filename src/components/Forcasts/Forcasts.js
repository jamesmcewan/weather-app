import React from 'react';
import PropTypes from 'prop-types';

const Forcasts = ({ children }) => <nav className="forcast">{children}</nav>;

Forcasts.propTypes = {
  children: PropTypes.node.isRequired
};

export default Forcasts;
