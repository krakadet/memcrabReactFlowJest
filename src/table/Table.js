// @flow
import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import RowComponent from './RowComponent';
import AvgRow from './avgRow';
import type { Matrix } from '../types/MyTypes';


type State = {
  percentDisplayRow: string | null,
  highlightedCells: Array<string>
}

type Props= {
  dataMatrix: Matrix,
  lightValue: string
}


class Table extends React.Component<Props, State> {
    state = {
      percentDisplayRow: null,
      highlightedCells: [],
    };

    newLightingCell = (idCell: string, cellsCount: string, dataMatrix: Matrix): Array<string> => {
      if (idCell !== undefined) {
        const useArr = Object.keys(dataMatrix.cells);
        const valueOfCell = dataMatrix.cells[idCell].value;
        const compare = (first: string, second: string): 1 | 0 | -1 => {
          const firstValue = dataMatrix.cells[first].value;
          const secondValue = dataMatrix.cells[second].value;
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


    avgColumnMatrix = (dataMatrix): Array<string> => {
      const resultArr: Array<string> = [];
      if (dataMatrix.rows.length !== 0) {
        for (let column = 0; column < dataMatrix.rows[0].cells.length; column += 1) {
          let sums: number = 0;
          for (let i = 0; i < dataMatrix.rows.length; i += 1) {
            const cell = dataMatrix.rows[i].cells[column];
            sums += dataMatrix.cells[cell].value;
          }
          resultArr.push((sums / dataMatrix.rows.length).toFixed(1));
        }
      }
      return resultArr;
    };


    updateDataLightArrValue = (idCell: string) => {
      const { lightValue, dataMatrix } = this.props;
      const highlightedArr = this.newLightingCell(idCell, lightValue, dataMatrix);
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
      } = this.props;
      return (
        <table>
          <tbody id="matrixTable">
            {dataMatrix.rows.map((arr, index) => (
              <RowComponent
                key={arr.id}
                arr={arr}
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
              avgArr={this.avgColumnMatrix(dataMatrix)}
            />
          </tbody>
        </table>
      );
    }
}

export default connect((state => ({
  dataMatrix: state.state.dataMatrix,
  lightValue: state.state.lightValue,
})))(Table);
