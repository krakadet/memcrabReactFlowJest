// @flow
import * as React from 'react';
import '../style/cell.css';

type Props = {|
  +addCellPlusOne: Function,
  +lightValue: string,
  +updateDataLightArrValue: (?string) => void,
  +id: string,
  +value: number,
  +highlighted: boolean,
  +isStyle: boolean,
|};


export class Cell extends React.PureComponent<Props, {}> {
     handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
       console.log('click');
       const { addCellPlusOne } = this.props;
       addCellPlusOne(event.currentTarget.id);
     };

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

    addClass = (isStyle: boolean, highlighted: boolean) => {
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

export default Cell;
