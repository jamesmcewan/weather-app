type ForcastAPIItemMainType = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
};

type ForcastAPIItemWeatherType = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type ForcastAPIItemType = {
  dt: number;
  main: ForcastAPIItemMainType;
  weather: ForcastAPIItemWeatherType[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
};

type ForcastAPIResponseType = {
  cod: string;
  message: number;
  cnt: number;
  list: ForcastAPIItemType[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
};

export default ForcastAPIResponseType;
