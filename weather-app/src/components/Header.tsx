type HeaderProps = {
  name: string;
  country: string;
}

const Header = ({ name, country }: HeaderProps) => (
  <h1>
    {name}, {country}
  </h1>
);

Header.defaultProps = {
  name: '',
  country: ''
};

export default Header;
