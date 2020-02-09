import React from 'react';
import PropTypes from 'prop-types';
import Heading1 from '../styles/Heading1';

const Header = ({ name, country }) => (
  <Heading1>
    {name}, {country}
  </Heading1>
);

Header.propTypes = {
  name: PropTypes.string,
  country: PropTypes.string
};

Header.defaultProps = {
  name: '',
  country: ''
};

export default Header;
