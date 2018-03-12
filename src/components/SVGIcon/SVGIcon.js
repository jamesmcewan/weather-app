import React from 'react';
import PropTypes from 'prop-types';

const SVGIcon = ({ icon, alt }) => (
  <img className="forcast__image" src={`icons/${icon}.svg`} alt={alt} />
);

SVGIcon.propTypes = {
  icon: PropTypes.string,
  alt: PropTypes.string
};

SVGIcon.defaultProps = {
  icon: '',
  alt: ''
};

export default SVGIcon;
