import React from 'react';
import PropTypes from 'prop-types';
import Box from '../styles/Box';
import Input from '../styles/Input';
import Paragraph from '../styles/Paragraph';

const LocaleInput = ({ error, changeLocale }) => (
  <Box>
    <Input
      type="text"
      width="100%"
      fontSize="3rem"
      p="13px"
      m="2rem 0"
      placeholder="Enter city..."
      onBlur={e => changeLocale(e)}
    />
    <Paragraph>{error}</Paragraph>
  </Box>
);

LocaleInput.propTypes = {
  changeLocale: PropTypes.func,
  error: PropTypes.string
};

LocaleInput.defaultProps = {
  changeLocale: undefined,
  error: ''
};

export default LocaleInput;
