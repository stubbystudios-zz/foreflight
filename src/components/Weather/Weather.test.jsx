import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/testUtils';
import Weather from './Weather';

const setup = (props) => {
  return shallow(<Weather {...props} />);
}

let wrapper;

beforeEach(() => {
  wrapper = setup();
});

test('renders temperature without error', () => {
  const component = findByTestAttr(wrapper, 'component-temperature');
  expect(component.children.length).toBe(1);
});

test('renders humidity without error', () => {
  const component = findByTestAttr(wrapper, 'component-humidity');
  expect(component.children.length).toBe(1);
});

test('renders cloud coverage without error', () => {
  const component = findByTestAttr(wrapper, 'component-clouds');
  expect(component.children.length).toBe(1);
});

test('renders visibility without error', () => {
  const component = findByTestAttr(wrapper, 'component-visibility');
  expect(component.children.length).toBe(1);
});

test('renders wind speed without error', () => {
  const component = findByTestAttr(wrapper, 'component-wind-speed');
  expect(component.children.length).toBe(1);
});

test('renders wind direction without error', () => {
  const component = findByTestAttr(wrapper, 'component-wind-direction');
  expect(component.children.length).toBe(1);
});
