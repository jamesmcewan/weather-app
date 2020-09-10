import React from 'react';
import PropTypes from 'prop-types';
import Forcast from '../Forcast/Forcast';
import Nav from '../styles/Nav';

const Forcasts = ({ dates, changeDay }) => (
  <Nav
    display="flex"
    flexFlow="row wrap"
    position="fixed"
    bottom="0"
    width="100%"
    height="20%"
    maxHeight="150px"
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
  </Nav>
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
