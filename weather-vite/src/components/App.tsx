import { useEffect } from "react";
import { useAtom } from "jotai";
import Header from "./Header";
import Currently from "./Currently";
import Forcasts from "./Forcasts";
import Today from "./Today";
import LocaleInput from "./LocaleInput";
import { cityAtom } from "../state/atoms";

const App = () => {
  const [, setCity] = useAtom(cityAtom);

  useEffect(() => {
    setCity("London");
  }, []);

  return (
    <>
      <div>
        <LocaleInput />
        <Header />
        <Currently />
        <Today />
      </div>
      <Forcasts />
    </>
  );
};

export default App;
