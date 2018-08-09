import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import '../style/cell.css';
import connect from 'react-redux/es/connect/connect';
import { addCellPlusOne } from '../action/action';

class Cell extends PureComponent {
    getIdCell = event => event.currentTarget.id;

    handleClick = (event) => {
      event.preventDefault();
      const { addCellPlusOne, dataMatrix } = this.props;
      addCellPlusOne(this.getIdCell(event), dataMatrix);
    };

    lightingNumberNative = (event) => {
      event.preventDefault();
      if (this.props.lightValue !== 0) {
        this.props.updateDataLightArrValue();
      }
    };

    lightingNumbersCustom = (event) => {
      event.preventDefault();
      if (this.props.lightValue !== 0) {
        const idCell = this.getIdCell(event);
        this.props.updateDataLightArrValue(idCell);
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
          onMouseEnter={this.lightingNumbersCustom}
          onMouseLeave={this.lightingNumberNative}
        >
          {isStyle ? `${value} %` : value}
        </td>
      );
    }
}

Cell.propTypes = {
  id: PropTypes.string,
  addCellPlusOne: PropTypes.func,
  lightValue: PropTypes.number,
  value: PropTypes.number,
  isStyle: PropTypes.bool,
  highlighted: PropTypes.bool,
  dataMatrix: PropTypes.object,
  updateDataLightArrValue: PropTypes.func,

};

export default connect((state => ({
  dataMatrix: state.state.dataMatrix,
  lightValue: state.state.lightValue,
})), { addCellPlusOne })(Cell);
