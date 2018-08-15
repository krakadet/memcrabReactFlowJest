// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addRowToTable } from '../action/action';

type Props = {
  addRowToTable: (number) => void,
  valueColumn: number,
};

class ButtonAdd extends PureComponent<Props> {
    handlerClick = (event: Event & { currentTarget: HTMLButtonElement }) => {
      event.preventDefault();
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
  addRowToTable: PropTypes.func.isRequired,
  valueColumn: PropTypes.number.isRequired,

};

export default connect((state => ({
  dataMatrix: state.state.dataMatrix,
  valueColumn: state.state.valueColumn,
})), { addRowToTable })(ButtonAdd);
