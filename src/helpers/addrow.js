const id = () => `_${(Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()}`;


function getRandom() {
  const min = 100;
  const max = 999;
  return Math.floor(Math.random() * (max - min)) + min;
}

function createCell() {
  return { id: id(), value: getRandom() };
}


function createRow(dataMatrix, columnCount) {
  const currentMatrix = dataMatrix;
  const row = { id: id(), cells: [] };
  for (let i = 0; i < columnCount; i += 1) {
    const cell = createCell();
    currentMatrix.cells[cell.id] = cell;
    row.cells[i] = cell.id;
  }
  return row;
}

export const addRow = (dataMatrix, columnCount) => {
  const row = createRow(dataMatrix, columnCount);
  dataMatrix.rows[dataMatrix.rows.length] = row;
};

export const createTable = (dataMatrix, rowCount, columnCount) => {
  for (let i = 0; i < rowCount; i += 1) {
    addRow(dataMatrix, columnCount);
  }
};


export const deleteRow = (dataMatrix) => {
  dataMatrix.rows.splice(-1);
};
