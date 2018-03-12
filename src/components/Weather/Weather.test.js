import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Weather from './Weather';

configure({ adapter: new Adapter() });

describe('Weather', () => {
  it('renders', () => {
    const wrapper = shallow(<Weather />);
    expect(wrapper).to.have.length(1);
  });
});
