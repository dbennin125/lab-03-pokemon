import React from 'react';
import Header from './Header.js'
import {shallow } from 'enzyme';

test('check the headers', () => {
  const wrapper = shallow(<Header />);
  
  expect(wrapper.find('h1').length).toBe(1);
});
