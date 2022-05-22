import SVGIcon from '++components/SVGIcon';

type ForcastProps = {
  day: String;
  dt_txt: String;
  icon: String;
  changeDay: Function;
}

const Forcast = ({ dt_txt, day, icon, changeDay }: ForcastProps) => (
  <button
    onClick={() => changeDay(day)}
  >
    <p>{dt_txt}</p>
    <SVGIcon icon={icon} alt={dt_txt} />
  </button>
);

Forcast.defaultProps = {
  day: '',
  dt_txt: '',
  icon: '',
  changeDay: undefined
};

export default Forcast;
