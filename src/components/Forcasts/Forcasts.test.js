import React from 'react';
import { mount } from 'enzyme';
import Forcasts from './Forcasts';

const data = {
  day0: [{ weather: [{ icon: '' }] }],
  day1: [{ weather: [{ icon: '' }] }]
};

describe('Forcasts', () => {
  it('renders', () => {
    const wrapper = mount(<Forcasts />);
    expect(wrapper.find('nav.forcasts')).toHaveLength(1);
  });

  it('has two child Forcast components', () => {
    const wrapper = mount(<Forcasts dates={data} />);
    expect(wrapper.find('.forcast__day')).toHaveLength(2);
  });
});
