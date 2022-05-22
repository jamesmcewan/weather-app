import GeoCodingAPIResponseType from '++types/GeoCodingAPIResponseType'
import LatLonType from '++types/LatLonType'

function parseCity(city: GeoCodingAPIResponseType): LatLonType {
  const { lat, lon } = city
  return { lat , lon }
}

export default parseCity
