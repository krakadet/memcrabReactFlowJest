import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputRow from './InputRow';
import InputColumn from './InputColumn';
import HighlightNeighboursNumber from './HighlightNeighboursNumber';
import { createTableButtonClick } from '../../action';
import { connect } from 'react-redux';

class InputValuesComponent extends Component {
  state = {
    valueRow: 0,
    valueColumn: 0,
    lightValue: 0,
  };

  inputRowValue = (valueRow) => {
    this.setState({
      valueRow: +valueRow,
    });
  };

  inputColumnValue = (valueColumn) => {
    this.setState({
      valueColumn: +valueColumn,
    });
  };

  inputLightValue = (lightValue) => {
    this.setState({
      lightValue: +lightValue,
    });
  };

  handlerClickBtn = () => {
    const { createTableButtonClick } = this.props;
    createTableButtonClick(this.state.valueRow, this.state.valueColumn, this.state.lightValue);
  };

  render() {
    return (
      <form>
        <InputColumn inputColumnValue={this.inputColumnValue}/>
        <InputRow inputRowValue={this.inputRowValue}/>
        <HighlightNeighboursNumber inputLightValue={this.inputLightValue}/>
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
