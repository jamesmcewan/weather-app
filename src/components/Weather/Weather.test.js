import React from 'react';
import { shallow } from 'enzyme';
import Weather from './Weather';

describe('Weather', () => {
  it('renders a Paragraph', () => {
    const wrapper = shallow(<Weather />);
    expect(wrapper.find('Paragraph')).toHaveLength(1);
  });

  it('displays the forcast in the correct format', () => {
    const wrapper = shallow(<Weather main="Rain" description="Light rain" />);
    expect(wrapper.find('Paragraph').text()).toEqual('Rain - Light rain');
  });
});
