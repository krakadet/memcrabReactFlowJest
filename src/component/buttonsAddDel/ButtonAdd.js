import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addRowToTable } from '../../action';

class ButtonAdd extends PureComponent {

  handlerClick = (ev) => {
    ev.preventDefault();
    const { addRowToTable, dataMatrix, valueColumn } = this.props;
    addRowToTable(dataMatrix, valueColumn);
  };

  render() {

    return (
      <td>
        <button type="button" id="theButton" onClick={this.handlerClick}>
          {' '}
          Add
          {' '}
        </button>
      </td>
    );

  }
};
ButtonAdd.propTypes = {
  addRowToTable: PropTypes.func,
  dataMatrix: PropTypes.object,
  valueColumn: PropTypes.number,

};

export default connect((state => {
  return {
    dataMatrix: state.state.dataMatrix,
    valueColumn: state.state.valueColumn,
  };
}), { addRowToTable })(ButtonAdd);

