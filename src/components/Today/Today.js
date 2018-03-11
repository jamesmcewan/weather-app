import React from 'react';
import PropTypes from 'prop-types';

const Today = ({ children }) => <ul>{children}</ul>;

Today.propTypes = {
  children: PropTypes.node.isRequired
};

export default Today;
