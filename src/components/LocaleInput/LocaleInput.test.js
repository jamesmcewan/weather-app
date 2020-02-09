import React from 'react';
import { shallow } from 'enzyme';
import LocaleInput from './LocaleInput';

describe('LocaleInput', () => {
  it('renders an Input', () => {
    const wrapper = shallow(<LocaleInput />);
    expect(wrapper.find('Input')).toHaveLength(1);
  });
  it('renders a Paragraph', () => {
    const wrapper = shallow(<LocaleInput />);
    expect(wrapper.find('Paragraph')).toHaveLength(1);
  });
});
