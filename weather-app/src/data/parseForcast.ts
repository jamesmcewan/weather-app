import ForcastAPIResponseType from '++types/ForcastAPIResponseType'
import ForcastType from '++types/ForcastType'

function parseForcast(data: ForcastAPIResponseType): ForcastType[] {
  const forcast = data.list.map((item) => ({
    date: item.dt_txt,
    feelsLike: item.main.feels_like,
    humidity: item.main.humidity,
    icon: item.weather[0].icon,
    temp: item.main.temp,
    tempMax: item.main.temp_max,
    tempMin: item.main.temp_min,
    weatherDescription: item.weather[0].description,
  }))

  return forcast
}

export default parseForcast
