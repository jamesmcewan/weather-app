import React from 'react';
import { mount } from 'enzyme';
import Hourly from './Hourly';

describe('Hourly', () => {
  it('renders', () => {
    const wrapper = mount(<Hourly />);
    expect(wrapper.find('li.today__hour')).toHaveLength(1);
  });

  it('contains a header', () => {
    const wrapper = mount(<Hourly />);
    expect(wrapper.find('h4')).toHaveLength(1);
  });

  it('displays the date in the correct format', () => {
    const input = '2018-03-13 00:00:00';
    const output = '12:00:00 am';

    const wrapper = mount(<Hourly dt_txt={input} />);
    expect(wrapper.find('h4').text()).toEqual(output);
  });

  it('contains a data div', () => {
    const wrapper = mount(<Hourly />);
    expect(wrapper.find('div.current-date__data')).toHaveLength(1);
  });
});
