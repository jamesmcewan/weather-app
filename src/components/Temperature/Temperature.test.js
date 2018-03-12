import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Temperature from './Temperature';

configure({ adapter: new Adapter() });

describe('Temperature', () => {
  it('renders', () => {
    const wrapper = shallow(<Temperature />);
    expect(wrapper).to.have.length(1);
  });
});
