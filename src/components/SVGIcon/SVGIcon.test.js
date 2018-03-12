import React from 'react';
import { mount } from 'enzyme';
import SVGIcon from './SVGIcon';

describe('SVGIcon', () => {
  it('renders', () => {
    const wrapper = mount(<SVGIcon />);
    expect(wrapper.find('img')).toHaveLength(1);
  });
});
