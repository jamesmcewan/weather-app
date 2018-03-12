import React from 'react';
import PropTypes from 'prop-types';

const SVGIcon = ({ icon, alt, className }) => (
  <img className={className} src={`icons/${icon}.svg`} alt={alt} />
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
