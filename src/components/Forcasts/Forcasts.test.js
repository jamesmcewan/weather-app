import React from 'react';
import { shallow } from 'enzyme';
import Forcasts from './Forcasts';

const data = {
  day0: [{ weather: [{ icon: '' }] }],
  day1: [{ weather: [{ icon: '' }] }]
};

describe('Forcasts', () => {
  it('renders a Nav', () => {
    const wrapper = shallow(<Forcasts />);
    expect(wrapper.find('Nav')).toHaveLength(1);
  });

  it('has two child Forcast components', () => {
    const wrapper = shallow(<Forcasts dates={data} />);
    expect(wrapper.find('Forcast')).toHaveLength(2);
  });
});
