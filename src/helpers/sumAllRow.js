export const sumRow = (rowId, data) => {
  let sum = 0;
  for (const i of data.rows[rowId].cells) {
    sum += data.cells[i].value;
  }
  return sum;
};
