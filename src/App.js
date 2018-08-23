// @flow
import React from 'react';
import Table from './table/Table';
import InputValuesComponent from './InputValueComponent/InputValuesComponent';
import './style/App.css';

function App() {
  return (
    <div>
      <InputValuesComponent
        className="input"
      />
      <Table
        id="table_area"
      />
    </div>
  );
}

export default App;
