import { useAtomValue } from "jotai";
import { cityAtom } from "../state/atoms";

const Header = () => {
  const city = useAtomValue(cityAtom);
  return <h1>{city}</h1>;
};

export default Header;
