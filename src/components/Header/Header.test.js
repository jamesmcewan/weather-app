import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('renders', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('displays name and country in the correct format', () => {
    const wrapper = mount(<Header name="Edinburgh" country="GB" />);
    expect(wrapper.find('h1').text()).toEqual('Edinburgh, GB');
  });
});
