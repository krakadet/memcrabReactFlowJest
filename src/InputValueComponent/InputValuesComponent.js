import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputRow from './InputRow';
import InputColumn from './InputColumn';
import HighlightNeighboursNumber from './HighlightNeighboursNumber';
import { createTableButtonClick } from '../action/action';

class InputValuesComponent extends Component {
    createTableButtonClick = this.props;

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

        const {valueRow,valueColumn,lightValue} = this.state;
           const {createTableButtonClick}  = this.props;
      createTableButtonClick(valueRow, valueColumn, lightValue);
    };

    render() {
      return (
        <form>
          <InputColumn inputColumnValue={this.inputColumnValue} />
          <InputRow inputRowValue={this.inputRowValue} />
          <HighlightNeighboursNumber inputLightValue={this.inputLightValue} />
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
