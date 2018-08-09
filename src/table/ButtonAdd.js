import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addRowToTable } from '../action/action';

class ButtonAdd extends PureComponent {
    handlerClick = (ev) => {
      ev.preventDefault();
      const { addRowToTable, valueColumn } = this.props;
      addRowToTable(valueColumn);
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
}
ButtonAdd.propTypes = {
  addRowToTable: PropTypes.func,
  dataMatrix: PropTypes.object,
  valueColumn: PropTypes.number,

};

export default connect((state => ({
  dataMatrix: state.state.dataMatrix,
  valueColumn: state.state.valueColumn,
})), { addRowToTable })(ButtonAdd);
