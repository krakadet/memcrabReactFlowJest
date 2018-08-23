// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { createTableAction } from '../action/action';

type Props = {
  createTableButtonClick: Function
};

type State = {
  valueRow: string,
  valueColumn: string,

  lightValue: string,
};

class Cell extends React.Component<Props, State> {
  state = {
    valueRow: '0',
    valueColumn: '0',
    lightValue: '0',
  };

  handlerClickBtn = () => {
    const { valueRow, valueColumn, lightValue } = this.state;
    const { createTableButtonClick } = this.props;
    createTableButtonClick(valueRow, valueColumn, lightValue);
  };

  handlerOnChangeColumn = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ valueColumn: event.currentTarget.value });
  };

  handlerOnChangeRow = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ valueRow: event.currentTarget.value });
  };

  handlerOnCandlelight = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ lightValue: event.currentTarget.value });
  };

  render() {
    return (
      <form>
        <input type="number" placeholder="Input column" onChange={this.handlerOnChangeColumn} />
        <input type="number" placeholder="Input row" onChange={this.handlerOnChangeRow} />
        <input type="number" placeholder="Input highlight" onChange={this.handlerOnCandlelight} />
        <button type="button" className="btn" onClick={this.handlerClickBtn}>
          {' '}
          Create table
        </button>
      </form>
    );
  }
}

export default connect(state => ({
  state: state.dataMatrix,
}), { createTableButtonClick: createTableAction })(Cell);
