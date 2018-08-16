// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { deleteRowTable } from '../action/action';

type Props = {
  deleteRowTable: Function,
};

class ButtonDelete extends React.Component<Props, {}> {
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

export default connect(undefined, { deleteRowTable })(ButtonDelete);
