import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ButtonDelete from '../../component/buttonsAddDel/ButtonDelete';
import ButtonAdd from '../../component/buttonsAddDel/ButtonAdd';
import Cell from '../../component/cellComponent/Cell';
import CellSumRow from '../../component/lastCellSumRow/CellSumRow';
import { sumRow } from '../../helpers/sumAllRow';
import { percentValue } from '../../helpers/percentCalc';
import { connect } from 'react-redux';

class RowComponent extends PureComponent {
  render() {
    const {
      cellsDataValue,
      indexParentRow,
      dataMatrix,
      id,
      updateDataLightArrValue,
      highlightedCells,
      percentDisplayRow,
      percentDisplay,
    } = this.props;
    return (
      <tr id={id}>
        {percentDisplayRow === id ? cellsDataValue.map(val => (
          <Cell
            key={dataMatrix.cells[val].id}
            highlighted={highlightedCells.includes(val)}
            updateDataLightArrValue={updateDataLightArrValue}
            value={percentValue(dataMatrix.cells[val].value, sumRow(indexParentRow, dataMatrix))}
            id={dataMatrix.cells[val].id}
            isStyle
          />
        )) : cellsDataValue.map(val => (
          <Cell
            key={dataMatrix.cells[val].id}
            highlighted={highlightedCells.includes(val)}
            updateDataLightArrValue={updateDataLightArrValue}
            value={dataMatrix.cells[val].value}
            id={dataMatrix.cells[val].id}
          />
        ))
        }

        {
          <CellSumRow
            key = {id}
            indexParentRow={indexParentRow}
            percentDisplay={percentDisplay}
            sumAllCellRow={sumRow(indexParentRow, dataMatrix)}
          />
        }
        {
          <ButtonAdd/>
        }
        {
          <ButtonDelete/>
        }
      </tr>
    );
  }
}


RowComponent.propTypes = {
  dataMatrix: PropTypes.object,
  updateData: PropTypes.func,
  indexParentRow: PropTypes.number,
  percentDisplayRow: PropTypes.string,
  id: PropTypes.string,
  updateDataLightArrValue: PropTypes.array,
  cellsDataValue: PropTypes.array,
  highlightedCells: PropTypes.array,
  percentDisplay: PropTypes.number,
};

export default connect(state => {
  return {
    dataMatrix: state.state.dataMatrix,
  };
})(RowComponent);
