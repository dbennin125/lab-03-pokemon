import React from 'react';
import Footer from './Footer.js'
import {shallow } from 'enzyme';

test('check the headers', () => {
  
    const wrapper = shallow(<Footer />);
  
  expect(wrapper.find('p').length).toBe(1);
 
});
