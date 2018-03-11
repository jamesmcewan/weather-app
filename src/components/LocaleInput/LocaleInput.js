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
  changeLocale: PropTypes.func.isRequired,
  error: PropTypes.string
};

LocaleInput.defaultProps = {
  error: ''
};

export default LocaleInput;
