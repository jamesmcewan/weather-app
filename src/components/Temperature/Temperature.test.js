import React from 'react';
import { mount } from 'enzyme';
import Temperature from './Temperature';

describe('Temperature', () => {
  it('renders', () => {
    const wrapper = mount(<Temperature />);
    expect(wrapper.find('.temperature')).toHaveLength(1);
  });

  it('contains a header', () => {
    const wrapper = mount(<Temperature />);
    expect(wrapper.find('h3')).toHaveLength(1);
  });

  it('displays Average temp', () => {
    const wrapper = mount(<Temperature temp={5} />);
    expect(wrapper.find('.temperature__avg').text()).toEqual('Average: 5');
  });

  it('displays Min temp', () => {
    const wrapper = mount(<Temperature temp_min={6} />);
    expect(wrapper.find('.temperature__min').text()).toEqual('Min: 6');
  });

  it('displays Max temp', () => {
    const wrapper = mount(<Temperature temp_max={7} />);
    expect(wrapper.find('.temperature__max').text()).toEqual('Max: 7');
  });
});
