import React from 'react';
import PropTypes from 'prop-types';
import Forcast from '../Forcast/Forcast';

const Forcasts = ({ dates, changeDay }) => (
  <nav className="forcasts">
    {Object.keys(dates).map(day => (
      <Forcast
        {...dates[day][0]}
        key={`f__${day}`}
        day={day}
        icon={dates[day][0].weather[0].icon}
        changeDay={changeDay}
      />
    ))}
  </nav>
);

Forcasts.propTypes = {
  dates: PropTypes.shape({}),
  changeDay: PropTypes.func
};

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
