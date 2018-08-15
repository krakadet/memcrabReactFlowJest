// @flow
import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import RowComponent from './RowComponent';
import AvgRow from './avgRow';
import type { Matrix } from '../MyTypes';


type State = {
  percentDisplayRow: ?string,
  highlightedCells: Array<string>
}

type Props= {
  dataMatrix: Matrix,
  lightValue: number
}


class Table extends Component<Props, State> {
    state = {
      percentDisplayRow: null,
      highlightedCells: [],
    };

    newLightingCell = (idCell: string, cellsCount: number, dataMatrix: Matrix): Array<string> => {
      const findMaxIndexInArr = (lightArr: Array<string>, objData: Matrix, valueToCompare): number => {
        let maxDifference = 0;
        let lightArrIndex = 0;
        for (let i = 0; i < lightArr.length; i += 1) {
          const currentDifference = Math.abs(objData.cells[lightArr[i]].value - valueToCompare);
          if (currentDifference > maxDifference) {
            maxDifference = currentDifference;
            lightArrIndex = i;
          }
        }
        return lightArrIndex;
      };
      const lightArr = [];
      if (idCell !== undefined) {
        const currentValue: number = +dataMatrix.cells[idCell].value;
        for (const key in dataMatrix.cells) {
          if (key !== idCell) {
            const currentDiff: number = Math.abs(currentValue - dataMatrix.cells[key].value);
            if (lightArr.length < cellsCount) {
              lightArr[lightArr.length] = key;
            } else {
              const lightArrIndex = findMaxIndexInArr(lightArr, dataMatrix, currentValue);
              const diffArr = Math.abs(dataMatrix.cells[lightArr[lightArrIndex]].value - currentValue);
              if (diffArr > currentDiff) {
                lightArr[lightArrIndex] = key;
              }
            }
          }
        }
        return lightArr;
      }
      return lightArr;
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


    updateDataLightArrValue = (idCell) => {
      const { lightValue, dataMatrix } = this.props;
      const highlightedArr = this.newLightingCell(idCell, lightValue, dataMatrix);
      this.setState({
        highlightedCells: highlightedArr,
      });
    };

    percentDisplay = (row: string) => {
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
                indexParentRow={index}
                cellsDataValue={arr.cells}
                updateDataLightArrValue={this.updateDataLightArrValue}
                percentDisplayRow={percentDisplayRow}
                highlightedCells={highlightedCells}
                percentDisplay={this.percentDisplay}
              />
            ))}
            <AvgRow
              key="cell"
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
