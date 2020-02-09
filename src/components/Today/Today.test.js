import React from 'react';
import { shallow } from 'enzyme';
import Today from './Today';

describe('Today', () => {
  it('renders a Box', () => {
    const wrapper = shallow(<Today />);
    expect(wrapper.find('Box')).toHaveLength(1);
  });
  it('renders a Heading3', () => {
    const wrapper = shallow(<Today />);
    expect(wrapper.find('Heading3')).toHaveLength(1);
  });
  it('renders a List', () => {
    const wrapper = shallow(<Today />);
    expect(wrapper.find('List')).toHaveLength(1);
  });
});
