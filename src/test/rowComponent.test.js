import React from 'react';
import renderer from 'react-test-renderer';
import { RowComponent } from '../table/RowComponent';

it('renders correctly', () => {
  const tree = renderer.create(
    <RowComponent  />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
