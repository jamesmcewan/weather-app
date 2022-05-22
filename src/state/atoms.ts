import ForcastType from "../types/ForcastType";
import { atom } from "jotai";

const cityAtom = atom("");
const forcastAtom = atom([]);
const currentDayAtom = atom("");
const errorAtom = atom("");

export { cityAtom, forcastAtom, currentDayAtom, errorAtom };
