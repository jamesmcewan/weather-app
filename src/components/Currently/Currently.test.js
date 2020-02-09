import React from 'react';
import { shallow } from 'enzyme';
import Currently from './Currently';

describe('Currently', () => {
  it('renders the currently Box', () => {
    const wrapper = shallow(<Currently />);
    expect(wrapper.find('Box[data-selector="currently"]')).toHaveLength(1);
  });

  it('contains a header', () => {
    const wrapper = shallow(<Currently />);
    expect(wrapper.find('Heading2')).toHaveLength(1);
  });

  it('correctly displays the date', () => {
    const input = '2018-03-13 00:00:00';
    const output = 'Tuesday, March 13th 2018, 12:00:00 am';

    const wrapper = shallow(<Currently dt_txt={input} />);
    expect(wrapper.find('Heading2').text()).toEqual(output);
  });

  it('contains a child div of data', () => {
    const wrapper = shallow(<Currently />);
    expect(wrapper.find('[data-selector="data"]')).toHaveLength(1);
  });

  it('contains a child element of Weather', () => {
    const wrapper = shallow(<Currently />);
    expect(wrapper.find('Weather')).toHaveLength(1);
  });

  it('contains a child element of Temperature', () => {
    const wrapper = shallow(<Currently />);
    expect(wrapper.find('Temperature')).toHaveLength(1);
  });
});
