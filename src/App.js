import React, { Component } from 'react';
import Header from './component/Header/Header';
import Table from './container/table/Table';
import InputValuesComponent from './component/InputValueComponent/InputValuesComponent';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Header
          className="header"
        />
        <InputValuesComponent
          className="input"
        />
        <Table
          id="table_area"
        />
      </div>
    );
  }
}

export default App;
