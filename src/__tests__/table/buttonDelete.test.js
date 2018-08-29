// @flow

import React from 'react';
import renderer from 'react-test-renderer';
import { ButtonDelete } from '../../table/ButtonDelete';

it('renders correctly', () => {
  const tree = renderer.create(
    <ButtonDelete />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
