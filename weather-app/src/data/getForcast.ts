import ForcastType from '++types/ForcastType'
import mockForcast from 'src/test/__mocks__/mockForcast'
import getLatLon from './getLatLon'

async function getForcast(location: string): Promise<ForcastType[] | Error> {
  try {
    const response = await getLatLon(location)
    const forcast = await mockForcast(response);

    return forcast;

  } catch (error) {
    throw new Error(error)
  }
}

export default getForcast
