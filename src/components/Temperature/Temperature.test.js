import React from 'react';
import { shallow } from 'enzyme';
import Temperature from './Temperature';

describe('Temperature', () => {
  it('renders a Box', () => {
    const wrapper = shallow(<Temperature />);
    expect(wrapper.find('Box')).toHaveLength(1);
  });

  it('contains a Heading3', () => {
    const wrapper = shallow(<Temperature />);
    expect(wrapper.find('Heading3')).toHaveLength(1);
  });

  it('contains a List', () => {
    const wrapper = shallow(<Temperature />);
    expect(wrapper.find('List')).toHaveLength(1);
  });
  it('contains 3 ListItem components', () => {
    const wrapper = shallow(<Temperature />);
    expect(wrapper.find('ListItem')).toHaveLength(3);
  });

  it('displays Average temp', () => {
    const wrapper = shallow(<Temperature temp={5} />);
    expect(wrapper.find('[data-selector="avg"]').text()).toEqual('Average: 5');
  });

  it('displays Min temp', () => {
    const wrapper = shallow(<Temperature temp_min={6} />);
    expect(wrapper.find('[data-selector="min"]').text()).toEqual('Min: 6');
  });

  it('displays Max temp', () => {
    const wrapper = shallow(<Temperature temp_max={7} />);
    expect(wrapper.find('[data-selector="max"]').text()).toEqual('Max: 7');
  });
});
