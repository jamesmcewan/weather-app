import React from 'react';
import { shallow } from 'enzyme';
import Forcast from './Forcast';

describe('Forcast', () => {
  it('renders a Button', () => {
    const wrapper = shallow(<Forcast />);
    expect(wrapper.find('Button')).toHaveLength(1);
  });
  it('renders a Paragraph', () => {
    const wrapper = shallow(<Forcast />);
    expect(wrapper.find('Paragraph')).toHaveLength(1);
  });
  it('renders a SVGIcon', () => {
    const wrapper = shallow(<Forcast />);
    expect(wrapper.find('SVGIcon')).toHaveLength(1);
  });
});
