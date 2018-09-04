// @flow

import React from 'react';
import renderer from 'react-test-renderer';
import { ButtonAdd } from '../../table/ButtonAdd';

it('renders correctly', () => {
  const tree = renderer.create(
    <ButtonAdd />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
