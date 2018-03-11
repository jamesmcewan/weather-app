const city = {
  id: 0,
  name: '',
  coord: { lat: 0, lon: 0 },
  country: '',
  population: 0
};

const dates = {
  day0: [
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
          icon: '01n'
        }
      ],
      clouds: { all: 0 },
      wind: { speed: 0, deg: 0 },
      rain: { '3h': 0 },
      sys: { pod: '' },
      dt_txt: ''
    }
  ],
  day1: [
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
          icon: '01n'
        }
      ],
      clouds: { all: 0 },
      wind: { speed: 0, deg: 0 },
      rain: { '3h': 0 },
      sys: { pod: '' },
      dt_txt: ''
    }
  ],
  day2: [
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
          icon: '01n'
        }
      ],
      clouds: { all: 0 },
      wind: { speed: 0, deg: 0 },
      rain: { '3h': 0 },
      sys: { pod: '' },
      dt_txt: ''
    }
  ],
  day3: [
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
          icon: '01n'
        }
      ],
      clouds: { all: 0 },
      wind: { speed: 0, deg: 0 },
      rain: { '3h': 0 },
      sys: { pod: '' },
      dt_txt: ''
    }
  ],
  day4: [
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
          icon: '01n'
        }
      ],
      clouds: { all: 0 },
      wind: { speed: 0, deg: 0 },
      rain: { '3h': 0 },
      sys: { pod: '' },
      dt_txt: ''
    }
  ]
};

const currentDay = [
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
        icon: '01n'
      }
    ],
    clouds: { all: 0 },
    wind: { speed: 0, deg: 0 },
    rain: { '3h': 0 },
    sys: { pod: '' },
    dt_txt: ''
  }
];

export { dates, city, currentDay };
