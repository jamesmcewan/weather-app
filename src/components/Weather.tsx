type WeatherProps = {
  main: String;
  description: String;
};

const Weather = ({ main, description }: WeatherProps) => (
  <p>
    {main} - {description}
  </p>
);

Weather.defaultProps = {
  main: "",
  description: "",
};

export default Weather;
