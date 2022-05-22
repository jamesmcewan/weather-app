import Weather from '++components/Weather';
import Temperature from '++components/Temperature';

type CurrentlyProps = {
  dt_txt: string;
  weather: Array<any>;
  main: any;
}

const Currently = ({ dt_txt, weather, main }: CurrentlyProps) => (
  <div data-selector="currently">
    <h2>
      {dt_txt}
    </h2>
    <div data-selector="data">
      <Weather {...weather[0]} />
      <Temperature {...main} />
    </div>
  </div>
);

Currently.defaultProps = {
  dt_txt: '',
  weather: [{}],
  main: {}
};

export default Currently;
