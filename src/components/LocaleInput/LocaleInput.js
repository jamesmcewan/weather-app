import React from 'react';
import PropTypes from 'prop-types';

const LocaleInput = ({ error, changeLocale }) => (
  <div>
    <input
      type="text"
      className="locale"
      placeholder="Enter city..."
      onBlur={e => changeLocale(e)}
    />
    <p>{error}</p>
  </div>
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
