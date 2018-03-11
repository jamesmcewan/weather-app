import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ name, country }) => (
  <h1>
    {name}, {country}
  </h1>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
};

export default Header;
