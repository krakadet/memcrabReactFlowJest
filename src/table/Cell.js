// @flow
import * as React from 'react';
import '../style/cell.css';
import connect from 'react-redux/es/connect/connect';
import { addCellPlusOneAC } from '../action/action';
import type { Matrix } from '../types/MyTypes';

type Props = {
  addCellPlusOne: (string, Matrix) => void,
  lightValue: (string, Matrix) => void,
  updateDataLightArrValue: (?string) => void,
  dataMatrix: Matrix,
  id: string,
  value: number,
  highlighted: string,
  isStyle: boolean,
};


class Cell extends React.PureComponent<Props> {
    handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
      event.preventDefault();
      const { addCellPlusOne, dataMatrix } = this.props;
      addCellPlusOne(event.currentTarget.id, dataMatrix);
    }

    lightingNumberNative = (event: SyntheticEvent<HTMLTableCellElement>) => {
      event.preventDefault();
      const { lightValue, updateDataLightArrValue } = this.props;
      if (lightValue !== 0) {
        updateDataLightArrValue();
      }
    };

    lightingNumbersCustom = (event: SyntheticEvent<HTMLTableCellElement>) => {
      event.preventDefault();
      const { lightValue, updateDataLightArrValue } = this.props;
      if (lightValue !== 0) {
        updateDataLightArrValue(event.currentTarget.id);
      }
    };

    addClass = (isStyle, highlighted) => {
      if (isStyle) {
        return 'filled';
      }
      if (highlighted) {
        return 'red';
      }
      return '';
    };


    render() {
      const {
        id,
        value,
        highlighted,
        isStyle,
      } = this.props;
      return (
        <td
          id={`${id}`}
          style={{ backgroundSize: ` ${value}% 100%` }}
          className={this.addClass(isStyle, highlighted)}
          onClick={this.handleClick}
          role="presentation"
          onMouseEnter={this.lightingNumbersCustom}
          onMouseLeave={this.lightingNumberNative}
        >
          {isStyle ? `${value} %` : value}
        </td>
      );
    }
}

export default connect((state => ({
  dataMatrix: state.state.dataMatrix,
  lightValue: state.state.lightValue,
})), { addCellPlusOne: addCellPlusOneAC })(Cell);
