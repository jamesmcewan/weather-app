import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Weather from '../Weather/Weather';
import Temperature from '../Temperature/Temperature';

const Currently = ({ dt_txt, weather, main }) => (
  <div className="current-date">
    <h2>{moment(dt_txt).format('dddd, MMMM Do YYYY, h:mm:ss a')}</h2>
    <div className="current-date__data">
      <Weather {...weather[0]} />
      <Temperature {...main} />
    </div>
  </div>
);

Currently.propTypes = {
  dt_txt: PropTypes.string,
  weather: PropTypes.arrayOf(PropTypes.shape({})),
  main: PropTypes.shape({})
};

Currently.defaultProps = {
  dt_txt: '',
  weather: [{}],
  main: {}
};

export default Currently;
