import React from 'react';
import { mount } from 'enzyme';
import Currently from './Currently';
import Weather from './../Weather/Weather';
import Temperature from './../Temperature/Temperature';

describe('Currently', () => {
  it('renders', () => {
    const wrapper = mount(<Currently />);
    expect(wrapper.find('div.current-date')).toHaveLength(1);
  });

  it('contains a header', () => {
    const wrapper = mount(<Currently />);
    expect(wrapper.find('h2')).toHaveLength(1);
  });

  it('correctly displays the date', () => {
    const input = '2018-03-13 00:00:00';
    const output = 'Tuesday, March 13th 2018, 12:00:00 am';

    const wrapper = mount(<Currently dt_txt={input} />);
    expect(wrapper.find('h2').text()).toEqual(output);
  });

  it('contains a child div of data', () => {
    const wrapper = mount(<Currently />);
    expect(wrapper.find('div.current-date__data')).toHaveLength(1);
  });

  it('contains a child element of Weather', () => {
    const wrapper = mount(<Currently />);
    expect(wrapper.contains(<Weather />)).toEqual(true);
  });

  it('contains a child element of Temperature', () => {
    const wrapper = mount(<Currently />);
    expect(wrapper.contains(<Temperature />)).toEqual(true);
  });
});
