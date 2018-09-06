// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import RowComponent from './RowComponent';
import AvgRow from './avgRow';
import type { Matrix } from '../types/MyTypes';
import style from '../style/App.css';

type State = {
  percentDisplayRow: string | null,
  highlightedCells: $ReadOnlyArray<string>
}

type Props= {|
  +dataMatrix: Matrix,
  +lightValue: string,
  +cells: {},
|}

export class Table extends React.Component<Props, State> {
 static avgColumnMatrix = (dataMatrix: Matrix, cells: {}): $ReadOnlyArray<string> => {
   let resultArr: $ReadOnlyArray<string> = [];
   if (dataMatrix.rows.length !== 0) {
     for (let column = 0; column < dataMatrix.rows[0].cells.length; column += 1) {
       let sums: number = 0;
       for (let i = 0; i < dataMatrix.rows.length; i += 1) {
         const cell = dataMatrix.rows[i].cells[column];
         sums += cells[cell].value;
       }
       const avgSum = [(sums / dataMatrix.rows.length).toFixed(1)];
       resultArr = resultArr.concat(avgSum);
     }
   }
   return resultArr;
 };

    static newLightingCell = (
      idCell: string,
      cellsCount: string,
      cells: {},
    ): $ReadOnlyArray<string> => {
      if (idCell !== undefined) {
        const useArr = Object.keys(cells);
        const valueOfCell = cells[idCell].value;
        const compare = (first: string, second: string): 1 | 0 | -1 => {
          const firstValue = cells[first].value;
          const secondValue = cells[second].value;
          const absFirst = Math.abs(firstValue - valueOfCell);
          const absSecond = Math.abs(secondValue - valueOfCell);
          if (absFirst < absSecond) return -1;
          if (absFirst > absSecond) return 1;
          return 0;
        };
        useArr.sort(compare);
        const count = +cellsCount + 1;
        return useArr.slice(1, count);
      }
      return [];
    };

  state = {
    percentDisplayRow: null,
    highlightedCells: [],
  };


    updateDataLightArrValue = (idCell: string) => {
      const { lightValue, cells } = this.props;
      const highlightedArr = Table.newLightingCell(idCell, lightValue, cells);
      this.setState({
        highlightedCells: highlightedArr,
      });
    };

    percentDisplay = (row: ?string) => {
      if (row) {
        this.setState({
          percentDisplayRow: row,
        });
      } else {
        this.setState({
          percentDisplayRow: row,
        });
      }
    };

    render() {
      const {
        percentDisplayRow,
        highlightedCells,
      } = this.state;
      const {
        dataMatrix,
        cells,
      } = this.props;
      return (
        <table className={style.matrixTable}>
          <tbody className="matrixTable">
            {dataMatrix.rows.map((arr, index) => (
              <RowComponent
                key={arr.id}
                id={arr.id}
                rowId={arr.id}
                indexParentRow={index}
                cellsDataValue={arr.cells}
                updateDataLightArrValue={this.updateDataLightArrValue}
                percentDisplayRow={percentDisplayRow}
                highlightedCells={highlightedCells}
                percentDisplay={this.percentDisplay}
              />
            ))}
            <AvgRow
              avgArr={Table.avgColumnMatrix(dataMatrix, cells)}
            />
          </tbody>
        </table>
      );
    }
}

export default connect((state => ({
  dataMatrix: state.store.dataMatrix,
  cells: state.store.cells,
  lightValue: state.store.lightValue,
})))(Table);
