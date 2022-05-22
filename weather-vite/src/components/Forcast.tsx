import ForcastType from "../types/ForcastType";

const Forcast = (props: ForcastType) => (
  <button>
    <h3>{props.date}</h3>
    <p>temp: {props.temp}</p>
    <p>Feels like: {props.feelsLike}</p>
    <p>Humidity: {props.humidity}</p>
    <p>{props.weatherDescription}</p>
    <p>Max: {props.tempMax}</p>
    <p>Min: {props.tempMin}</p>
    <img
      src={`http://openweathermap.org/img/w/${icon}.png`}
      alt={props.weatherDescription}
    />
  </button>
);

export default Forcast;
