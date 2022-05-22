type SVGIconProps = {
  icon: string;
  alt: string;
}

const SVGIcon = ({ icon, alt }) => (
  <img src={`icons/${icon}.svg`} alt={alt} />
);

SVGIcon.defaultProps = {
  icon: '',
  alt: '',
  className: ''
};

export default SVGIcon;
