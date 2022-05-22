import Hourly from "./Hourly";
import Weather from "./Weather";

type TodayProps = {
  cd: any;
};

const Today = ({ cd }: TodayProps) => (
  <div>
    <h3>Hourly forcasts</h3>
    <ul>
      {cd.map((day) => (
        <Hourly {...day} key={`h__${day.dt}`}>
          <Weather {...day.weather[0]} />
        </Hourly>
      ))}
    </ul>
  </div>
);

Today.defaultProps = {
  cd: [{ weather: [] }],
};

export default Today;
