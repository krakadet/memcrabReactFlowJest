import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RowDelete from '../../component/buttonsAddDel/ButtonDelete';
import RowAdd from '../../component/buttonsAddDel/ButtonAdd';
import Cell from '../../component/cellComponent/Cell';
import CellSumRow from '../../component/allSumTable/CellSumRow';
import { sumRow } from '../../helpers/sumAllRow';
import { percentValue } from '../../helpers/percentCalc';

class RowComponent extends PureComponent {
  render() {
    const {
      cellsDataValue,
      indexParentRow,
      updateData,
      dataMatrix,
      id,
      highlightedCells,
      percentDisplayRow,
      addCellPlusOne,
      updateDataLightArrValue,
      percentDisplay,
    } = this.props;
    return (
      <tr id={id}>
        {percentDisplayRow === id ? cellsDataValue.map(val => (
          <Cell
            key={dataMatrix.cells[val].id}
            highlighted={highlightedCells.includes(val)}
            value={percentValue(dataMatrix.cells[val].value, sumRow(indexParentRow, dataMatrix))}
            id={dataMatrix.cells[val].id}
            addCellPlusOne={addCellPlusOne}
            updateDataLightArrValue={updateDataLightArrValue}
            isStyle
          />
        )) : cellsDataValue.map(val => (
          <Cell
            key={dataMatrix.cells[val].id}
            highlighted={highlightedCells.includes(val)}
            value={dataMatrix.cells[val].value}
            id={dataMatrix.cells[val].id}
            addCellPlusOne={addCellPlusOne}
            updateDataLightArrValue={updateDataLightArrValue}
          />
        ))
                }

        {
          <CellSumRow
            indexParentRow={indexParentRow}
            percentDisplay={percentDisplay}
            sumAllCellRow={sumRow(indexParentRow, dataMatrix)}
          />
                }
        {
          <RowAdd updateData={updateData} />
                }
        {
          <RowDelete updateData={updateData} />
                }
      </tr>
    );
  }
}
RowComponent.defaultProps = {
  indexParentRow: 0,
  percentDisplayRow: '',
  id: '',
  cellsDataValue: [],
  highlightedCells: [],
  percentDisplay: 0,
  dataMatrix: {
    rows: [],
    cells: {},
  },

};

RowComponent.propTypes = {
  dataMatrix: PropTypes.object,
  updateData: PropTypes.func,
  addCellPlusOne: PropTypes.func,
  indexParentRow: PropTypes.number,
  updateDataLightArrValue: PropTypes.func,
  percentDisplayRow: PropTypes.string,
  id: PropTypes.string,
  cellsDataValue: PropTypes.array,
  highlightedCells: PropTypes.array,
  percentDisplay: PropTypes.number,
};

export default RowComponent;
