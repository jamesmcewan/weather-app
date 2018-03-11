const data = {
  cod: '',
  message: 0,
  cnt: 0,
  list: [
    {
      dt: 0,
      main: {
        temp: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        sea_level: 0,
        grnd_level: 0,
        humidity: 0,
        temp_kf: 0
      },
      weather: [
        {
          id: 0,
          main: '',
          description: '',
          icon: ''
        }
      ],
      clouds: { all: 0 },
      wind: { speed: 0, deg: 0 },
      rain: { '3h': 0 },
      snow: {},
      sys: { pod: '' },
      dt_txt: ''
    }
  ],
  city: {
    id: 0,
    name: '',
    coord: { lat: 0, lon: 0 },
    country: '',
    population: 0
  }
};

export default data;
