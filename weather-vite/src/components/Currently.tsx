import Weather from "./Weather";
import Temperature from "./Temperature";

type CurrentlyProps = {
  dt_txt: string;
  weather: Array<any>;
  main: any;
};

const Currently = ({ dt_txt, weather, main }: CurrentlyProps) => (
  <div data-selector="currently">
    <h2>{dt_txt}</h2>
    <div data-selector="data">
      <Weather {...weather[0]} />
      <Temperature {...main} />
    </div>
  </div>
);

export default Currently;
