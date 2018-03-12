import React from 'react';
import { mount } from 'enzyme';
import Weather from './Weather';

describe('Weather', () => {
  it('renders', () => {
    const wrapper = mount(<Weather />);
    expect(wrapper.find('p.weather')).toHaveLength(1);
  });

  it('displays the forcast in the correct format', () => {
    const wrapper = mount(<Weather main="Rain" description="Light rain" />);
    expect(wrapper.find('p.weather').text()).toEqual('Rain - Light rain');
  });
});
