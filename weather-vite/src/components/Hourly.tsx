type HourlyProps = {
  dt_txt: string;
  children: any;
};

const Hourly = ({ dt_txt, children }: HourlyProps) => (
  <li>
    <h4>{dt_txt}</h4>
    <div>{children}</div>
  </li>
);

Hourly.defaultProps = {
  dt_txt: "",
  children: undefined,
};

export default Hourly;
