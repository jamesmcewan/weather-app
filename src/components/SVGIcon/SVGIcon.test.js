import React from 'react';
import { shallow } from 'enzyme';
import SVGIcon from './SVGIcon';

describe('SVGIcon', () => {
  it('renders an Image', () => {
    const wrapper = shallow(<SVGIcon />);
    expect(wrapper.find('Image')).toHaveLength(1);
  });
});
