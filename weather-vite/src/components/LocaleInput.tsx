type LocaleInputProps = {
  error: string;
  changeLocale: Function;
};

const LocaleInput = ({ error, changeLocale }: LocaleInputProps) => (
  <div>
    <input
      type="text"
      placeholder="Enter city..."
      onBlur={(e) => changeLocale(e)}
    />
    <p>{error}</p>
  </div>
);

LocaleInput.defaultProps = {
  changeLocale: undefined,
  error: "",
};

export default LocaleInput;
