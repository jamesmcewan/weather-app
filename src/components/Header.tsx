import { useAtomValue } from 'jotai';
import { cityAtom } from '../state/atoms';

const Header = () => {
  const city = useAtomValue(cityAtom);
  return (
    <header className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white">{city}</h1>
      </div>
    </header>
  );
};

export default Header;
