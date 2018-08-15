// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteRowTable } from '../action/action';

type Props = {
  deleteRowTable: () => void,
};


class ButtonDelete extends PureComponent<Props> {
  handlerClick = (event: Event & { currentTarget: HTMLButtonElement }) => {
    event.preventDefault();
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
  deleteRowTable: PropTypes.func.isRequired,
};

export default connect((state => ({
  dataMatrix: state.state.dataMatrix,
})), { deleteRowTable })(ButtonDelete);
