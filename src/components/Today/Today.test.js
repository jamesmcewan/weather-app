import React from 'react';
import { mount } from 'enzyme';
import Today from './Today';

describe('Today', () => {
  it('renders', () => {
    const wrapper = mount(<Today />);
    expect(wrapper.find('.today')).toHaveLength(1);
  });
});
