// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createTableButtonClick } from '../action/action';

type Props = {
  createTableButtonClick: (valueRow: number, valueColumn: number, lightValue: number)=> void
};

type State = {
  valueRow: number,
  valueColumn: number,
  lightValue: number,
};


class InputValuesComponent extends Component< Props, State> {
  state = {
    valueRow: 0,
    valueColumn: 0,
    lightValue: 0,
  };

    handlerClickBtn = () => {
      const { valueRow, valueColumn, lightValue } = this.state;
      const {createTableButtonClick} = this.props;
      createTableButtonClick(valueRow, valueColumn, lightValue);
    };

    render() {
      return (
        <form>
          <input type="number" placeholder="Input column" onChange={event => this.setState({ valueColumn: event.currentTarget.value })} />
          <input type="number" placeholder="Input row" onChange={event => this.setState({ valueRow: event.currentTarget.value })} />
          <input type="number" placeholder="Input highlight" onChange={event => this.setState({ lightValue: event.currentTarget.value })} />
          <button type="button" className="btn" onClick={this.handlerClickBtn}>
            {' '}
                    Create table
          </button>
        </form>
      );
    }
}

InputValuesComponent.propTypes = {
  createTableButtonClick: PropTypes.func,
};

export default connect(state => ({
  state: state.dataMatrix,
}), { createTableButtonClick })(InputValuesComponent);
