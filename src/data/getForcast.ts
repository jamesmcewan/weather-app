import ForcastType from "../types/ForcastType";
import mockForcast from "../test/__mocks__/mockForcast";
import getLatLon from "./getLatLon";
import parseForcast from "./parseForcast";

async function getForcast(location: string): Promise<any | Error> {
  try {
    const response = await getLatLon(location);
    const forcast = await mockForcast(response);
    const parsedForcast = parseForcast(forcast);
    return parsedForcast;
  } catch (error: any) {
    throw new Error(error);
  }
}

export default getForcast;
