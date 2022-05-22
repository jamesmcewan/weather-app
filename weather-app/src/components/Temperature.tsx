type TemperatureProps = {
  temp: number;
  temp_min: number;
  temp_max: number;
}

const Temperature = ({ temp, temp_min, temp_max }: TemperatureProps) => (
  <div>
    <h1>Temperature (c)</h1>
    <ul>
      <li data-selector="avg">Average: {temp}</li>
      <li data-selector="min">Min: {temp_min}</li>
      <li data-selector="max">Max: {temp_max}</li>
    </ul>
  </div>
);

Temperature.defaultProps = {
  temp: 0,
  temp_min: 0,
  temp_max: 0
};

export default Temperature;
