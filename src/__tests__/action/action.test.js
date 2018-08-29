// @flow
import * as t from '../../constans';
import {
  addCellPlusOneAC,
  deleteRowTableAC,
  createRow,
} from '../../action/action';

describe('actionsTest', () => {
  it('addCellPlusOneAC.Test', () => {
    const expectedAction = {
      type: t.ADD_PLUS_ONE_IN_CELL,
      payload: 'niahi448',
    };
    expect(addCellPlusOneAC('niahi448')).toEqual(expectedAction);
  });

  it('deleteRowTableAC.Test', () => {
    const expectedAction = {
      type: t.DELETE_ROW_TO_TABLE,
      payload: 'niahi448',
    };
    expect(deleteRowTableAC('niahi448')).toEqual(expectedAction);
  });

  it('createRowTestArg0', () => {
    const expectedRow = createRow('0');
    expect(expectedRow.row.cells.length).toEqual(0);
    expect(Object.keys(expectedRow.cells).length).toEqual(0);
  });

  it('createRowTestArg100', () => {
    const expectedRow = createRow('100');
    expect(expectedRow.row.cells.length).toEqual(100);
    expect(Object.keys(expectedRow.cells).length).toEqual(100);
  });
});
