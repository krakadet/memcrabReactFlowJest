import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteRowTable } from '../action/action';

class ButtonDelete extends PureComponent {
  handlerClick = (ev) => {
    ev.preventDefault();
    const { deleteRowTable } = this.props;
    deleteRowTable();
  };

  render() {
    return (
      <td>
        <button type="button" id="theButton" onClick={this.handlerClick}>
          {' '}
          Delete
          {' '}
        </button>
      </td>
    );
  }
}

ButtonDelete.propTypes = {
  dataMatrix: PropTypes.object,
  deleteRowTable: PropTypes.func,
};

export default connect((state => ({
  dataMatrix: state.state.dataMatrix,
})), { deleteRowTable })(ButtonDelete);
