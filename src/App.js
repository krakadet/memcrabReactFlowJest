import React, { Component } from 'react';
import Header from './component/Header/Header';
import Table from './container/table/Table';
import InputValuesComponent from './component/InputValueComponent/InputValuesComponent';
import './App.css';
import { addRow, createTable, deleteRow } from './helpers/addrow';

class App extends Component {
    state = {
      valueRow: 0,
      valueColumn: 0,
      lightValue: 0,
      dataMatrix: {
        rows: [],
        cells: {},
      },
    };

    createTableButtonClick = (rowCount, columnCount, lightCount) => {
      const newMatrix = {
        rows: [],
        cells: {},
      };

      createTable(newMatrix, rowCount, columnCount);
      this.setState({
        valueRow: rowCount,
        valueColumn: columnCount,
        lightValue: lightCount,
        dataMatrix: newMatrix,
      });
    };

    updateData = (value) => {
      if (value === 'add') {
        this.addRowToPage();
      } else {
        this.deleteRowToPage();
      }
    };

    addRowToPage = () => {
      const { dataMatrix, valueColumn } = this.state;
      addRow(dataMatrix, valueColumn);
      const matrix = Object.assign({}, dataMatrix);
      this.setState({
        dataMatrix: matrix,
      });
    };

    deleteRowToPage = () => {
      const { dataMatrix } = this.state;
      deleteRow(dataMatrix);
      const matrix = Object.assign({}, dataMatrix);
      this.setState({
        dataMatrix: matrix,
      });
    };

    addCellPlusOne = (idCell) => {
      const { dataMatrix } = this.state;
      const matrix = Object.assign({},dataMatrix, dataMatrix.cells[idCell].value += 1);
      this.setState({
        dataMatrix: matrix,
      });
    };


    render() {
      return (
        <div>
          <Header
            className="header"
          />
          <InputValuesComponent
            className=""
            createTableButtonClick={this.createTableButtonClick}
          />
          <Table
            id="table_area"
            {...this.state}
            addRowToPage={this.addRowToPage}
            deleteRowToPage={this.deleteRowToPage}
            updateData={this.updateData}
            addCellPlusOne={this.addCellPlusOne}
          />
        </div>
      );
    }
}

export default App;
