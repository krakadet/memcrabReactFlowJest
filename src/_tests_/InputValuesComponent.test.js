import React from 'react';
import renderer from 'react-test-renderer';
import { Cell } from '../InputValueComponent/Cell';

it('renders correctly', () => {
  const tree = renderer.create(
    <Cell />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});