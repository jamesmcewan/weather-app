import GeoCodingAPIResponseType from "++types/GeoCodingAPIResponseType";
import LatLonType from "++types/LatLonType";
// import axios from "axios";
import mockGeo from "src/test/__mocks__/mockGeo";
import parseCity from "./parseCity"

async function getLatLon(city:string): Promise<LatLonType | Error> {
  try {
    const response = await mockGeo(city)
    const parsedCity = parseCity(response);
  
    return parsedCity;
  } catch (error) {
   throw new Error(error)
  }

}

export default getLatLon