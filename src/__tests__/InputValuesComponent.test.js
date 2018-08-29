// @flow

import React from 'react';
import renderer from 'react-test-renderer';
import { InputValuesComponent } from '../InputValueComponent/InputValuesComponent';

it('renders correctly', () => {
  const tree = renderer.create(
    <InputValuesComponent />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
