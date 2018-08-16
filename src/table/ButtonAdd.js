// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { addRowToTable } from '../action/action';

type Props = {
  addRowToTable: Function,
  valueColumn: string
}

class ButtonAdd extends React.Component<Props, {}> {
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

export default connect((state => ({
  valueColumn: state.state.valueColumn,
})), { addRowToTable })(ButtonAdd);
