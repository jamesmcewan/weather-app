import React from 'react';
import { mount } from 'enzyme';
import Forcast from './Forcast';

describe('Forcast', () => {
  it('renders', () => {
    const wrapper = mount(<Forcast />);
    expect(wrapper.find('button')).toHaveLength(1);
  });
});
