import { useEffect } from 'react';
import { useAtom } from 'jotai';
import Header from './Header';
import Currently from './Currently';
import Forcasts from './Forcasts';
import Today from './Today';
import SearchBar from './SearchBar';
import { cityAtom } from '../state/atoms';

const App = () => {
  const [, setCity] = useAtom(cityAtom);

  useEffect(() => {
    setCity('London');
  }, []);

  return (
    <div className="min-h-full">
      <div className="bg-indigo-600 pb-32">
        <SearchBar />
        <Header />
      </div>
      {/* <Currently /> */}
      <main className="-mt-32">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
            <Today />
            <Forcasts />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
