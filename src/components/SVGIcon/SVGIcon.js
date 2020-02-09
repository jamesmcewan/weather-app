import React from 'react';
import PropTypes from 'prop-types';
import Image from '../styles/Image';

const SVGIcon = ({ icon, alt }) => (
  <Image src={`icons/${icon}.svg`} alt={alt} />
);

SVGIcon.propTypes = {
  icon: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string
};

SVGIcon.defaultProps = {
  icon: '',
  alt: '',
  className: ''
};

export default SVGIcon;
