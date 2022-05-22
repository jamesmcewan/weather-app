import ForcastType from '++types/ForcastType'
import { atom } from 'jotai'

const cityAtom = atom('')
const forcastAtom = atom<ForcastType[]>([])
const currentDayAtom = atom<string>('')
const errorAtom = atom<string>('')

export { cityAtom, forcastAtom, currentDayAtom, errorAtom }
