import { addCellPlusOneAC, createTableAction } from '../action/action';
import * as t from '../constans';

it('addCellPlusOneACTest', () => {
  const expectedAction = {
    type: t.ADD_PLUS_ONE_IN_CELL,
    payload: 'niahi448',
  };
  expect(addCellPlusOneAC('niahi448')).toEqual(expectedAction);
});

/*it('createTableActionTest', () => {
  const expectedAction = {
    type: t.CREATE_TABLE_BUTTON_CLICK,
    payload: {
      columnCount: '2',
      lightCount: '2',
      newMatrix: {
        cells: {
          _JL69OME92WMJL: { id: '_JL69OME92WMJL', value: 356 }, _JL69OME9M0ZC8: { id: '_JL69OME9M0ZC8', value: 557 }, _JL69OME9TMVV8: { id: '_JL69OME9TMVV8', value: 395 }, _JL69OME9WARHP: { id: '_JL69OME9WARHP', value: 785 },
        },
        rows: [{ cells: ['_JL69OME9TMVV8', '_JL69OME9M0ZC8'], id: '_JL69OME9264UV' }, { cells: ['_JL69OME92WMJL', '_JL69OME9WARHP'], id: '_JL69OME94DSKE' }],
      },
      rowCount: '2',
    },
  };
  expect(createTableAction(2, '2', 2)).toEqual(expectedAction);
});*/
