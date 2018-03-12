import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('div.weather-app')).toHaveLength(1);
  });

  it('contains current day', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('div.current-day')).toHaveLength(1);
  });
});
