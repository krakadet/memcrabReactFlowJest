// @flow

import React from 'react';
import renderer from 'react-test-renderer';
import avgRow from '../../table/avgRow';

it('renders correctly', () => {
  const tree = renderer.create(
    <avgRow />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
