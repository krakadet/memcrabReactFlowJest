// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { addRowToTableAC } from '../action/action';

type Props = {
  addRowToTable: Function,
}

export class ButtonAdd extends React.Component<Props, {}> {
    handlerClick = (event: Event & { currentTarget: HTMLButtonElement }) => {
      event.preventDefault();
      const { addRowToTable } = this.props;
      addRowToTable();
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

export default connect(undefined, { addRowToTable: addRowToTableAC })(ButtonAdd);
