import React from 'react';
import { mount } from 'enzyme';
import LocaleInput from './LocaleInput';

describe('LocaleInput', () => {
  it('renders', () => {
    const wrapper = mount(<LocaleInput />);
    expect(wrapper.find('.locale')).toHaveLength(1);
  });
});
