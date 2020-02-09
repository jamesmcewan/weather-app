import React from 'react';
import { shallow } from 'enzyme';
import Hourly from './Hourly';

describe('Hourly', () => {
  it('renders a ListItem', () => {
    const wrapper = shallow(<Hourly />);
    expect(wrapper.find('ListItem')).toHaveLength(1);
  });

  it('contains a Heading4', () => {
    const wrapper = shallow(<Hourly />);
    expect(wrapper.find('Heading4')).toHaveLength(1);
  });

  it('displays the date in the correct format', () => {
    const input = '2018-03-13 00:00:00';
    const output = '12:00:00 am';

    const wrapper = shallow(<Hourly dt_txt={input} />);
    expect(wrapper.find('Heading4').text()).toEqual(output);
  });

  it('contains a data Box', () => {
    const wrapper = shallow(<Hourly />);
    expect(wrapper.find('Box')).toHaveLength(1);
  });
});
