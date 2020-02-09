import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('renders a Heading1', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('Heading1')).toHaveLength(1);
  });

  it('displays name and country in the correct format', () => {
    const wrapper = shallow(<Header name="Edinburgh" country="GB" />);
    expect(wrapper.find('Heading1').text()).toEqual('Edinburgh, GB');
  });
});
