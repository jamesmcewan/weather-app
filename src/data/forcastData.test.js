import forcastData, {
  getDates,
  getData,
  nextFiveDays,
  getDateString
} from './forcastData';

describe('nextFiveDays', () => {
  const result = nextFiveDays();

  it('should be an array', () => {
    expect(Array.isArray(result)).toBe(true);
  });

  it('should have a length of 5', () => {
    expect(result).toHaveLength(5);
  });

  it('should be an array of dates', () => {
    const expected = /(20\d{2})(\d{2})(\d{2})/g;
    result.map(r => expect(r).toMatch(expected));
  });
});

describe('getDateString', () => {
  const result = getDateString('2018-03-12 21:00:00');

  it('should return a string', () => {
    expect(typeof result).toEqual('string');
  });

  it('should not return a number', () => {
    expect(typeof result).not.toEqual('number');
  });
});

describe('getDates', () => {
  const dates = [
    {
      dt_txt: '2018-03-12 00:00:00'
    },
    {
      dt_txt: '2018-03-12 03:00:00'
    },
    {
      dt_txt: '2018-03-13 06:00:00'
    },
    {
      dt_txt: '2018-03-13 00:00:00'
    },
    {
      dt_txt: '2018-03-13 03:00:00'
    }
  ];

  const result = getDates(['20180312', '20180313'], dates);

  it('should return an object', () => {
    expect(typeof result).toBe('object');
  });

  it('should not return an array', () => {
    expect(Array.isArray(result)).not.toBe(true);
  });

  it('should have a length of two', () => {
    expect(Object.keys(result)).toHaveLength(2);
  });

  it('should have two child arrays', () => {
    Object.keys(result).map(key =>
      expect(Array.isArray(result[key])).toBe(true)
    );
  });
});

describe('getData', () => {
  const result = getData('Edinburgh');

  it('should return an object', () => {
    expect(typeof result).toBe('object');
  });
});

describe('forcastData', () => {
  const result = forcastData('Edinburgh');

  it('should return an object', () => {
    expect(typeof result).toBe('object');
  });
});
