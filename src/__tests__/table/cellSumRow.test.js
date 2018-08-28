// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import CellSumRow from '../../table/CellSumRow';

it('renders correctly', () => {
  const tree = renderer.create(
    <CellSumRow />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
