// @flow
import { addCellPlusOneAC, createTableAction } from '../action/action';
import * as t from '../constans';

it('addCellPlusOneACTest', () => {
  const expectedAction = {
    type: t.ADD_PLUS_ONE_IN_CELL,
    payload: 'niahi448',
  };
  expect(addCellPlusOneAC('niahi448')).toEqual(expectedAction);
});


it('createTableActionTest', () => {
  const expectedAction = {
    type: t.CREATE_TABLE_BUTTON_CLICK,
    payload: {
      rowCount: '2',
      columnCount: '2',
      lightCount: '2',
      newMatrix: {},
    },
  };
  expect(createTableAction('2', '2', '2')).toEqual(expectedAction);
});
