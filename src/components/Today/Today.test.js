import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Today from './Today';

configure({ adapter: new Adapter() });

describe('Today', () => {
  it('renders', () => {
    const wrapper = shallow(<Today />);
    expect(wrapper).to.have.length(1);
  });
});
