import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('[data-selector="weather-app"]')).toHaveLength(1);
  });

  it('contains current day', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Today')).toHaveLength(1);
  });
});
