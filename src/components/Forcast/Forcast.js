import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import SVGIcon from '../SVGIcon/SVGIcon';
import Button from '../styles/Button';
import Paragraph from '../styles/Paragraph';

const Forcast = ({ dt_txt, day, icon, changeDay }) => (
  <Button
    bg="#20232a"
    color="#f8f8f2"
    flexGrow="1"
    textAlign="center"
    m="1px"
    justifyContent="space-evenly"
    alignItems="flex-start"
    onClick={() => changeDay(day)}
  >
    <Paragraph fontSize="2rem">{format(new Date(dt_txt), 'eee')}</Paragraph>
    <SVGIcon icon={icon} alt={dt_txt} />
  </Button>
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
