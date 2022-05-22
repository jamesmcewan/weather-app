import Forcast from '++components/Forcast';

type ForcastsProps = {
  dates: any;
  changeDay: Function;
}

const Forcasts = ({ dates, changeDay }) => (
  <div
  >
    {Object.keys(dates).map((day) => (
      <Forcast
        {...dates[day][0]}
        key={`f__${day}`}
        day={day}
        icon={dates[day][0].weather[0].icon}
        changeDay={changeDay}
      />
    ))}
  </div>
);

Forcasts.defaultProps = {
  dates: {
    day0: [
      {
        weather: [{ icon: '' }]
      }
    ]
  },
  changeDay: undefined
};

export default Forcasts;
