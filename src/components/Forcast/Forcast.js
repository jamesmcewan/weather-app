import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import SVGIcon from '../SVGIcon/SVGIcon';

const Forcast = ({ dt_txt, day, icon, changeDay }) => (
  <button className="forcast" onClick={() => changeDay(day)}>
    <p className="forcast__day">{moment(dt_txt).format('ddd')}</p>
    <SVGIcon icon={icon} alt={dt_txt} className="forcast__image" />
  </button>
);

Forcast.propTypes = {
  day: PropTypes.string,
  dt_txt: PropTypes.string,
  icon: PropTypes.string,
  changeDay: PropTypes.func
};

Forcast.defaultProps = {
  day: '',
  dt_txt: '',
  icon: '',
  changeDay: undefined
};

export default Forcast;
