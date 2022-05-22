import { useEffect } from "react";
import { useAtom, useAtomValue } from "jotai";
import getForcast from "../data/getForcast";
import { forcastAtom, cityAtom, errorAtom } from "../state/atoms";
import ForcastType from "../types/ForcastType";
import Forcast from "./Forcast";

const Forcasts = () => {
  const [, setError] = useAtom(errorAtom);
  const [forcast, setForcast] = useAtom(forcastAtom);
  const city = useAtomValue(cityAtom);

  useEffect(() => {
    getForcast(city)
      .then((res) => setForcast(res))
      .catch((err) => setError(err));
  }, [city]);

  if (forcast.length === 0) return null;

  return (
    <div>
      {forcast.map((day: ForcastType, i: number) => (
        <Forcast key={`f__${day.id}-${i}`} {...day} />
      ))}
    </div>
  );
};

export default Forcasts;
