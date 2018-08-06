export const avgColumnMatrix = (dataMatrix) => {
  const resultArr = [];
  if (dataMatrix.rows.length !== 0) {
    for (let column = 0; column < dataMatrix.rows[0].cells.length; column += 1) {
      let sums = 0;
      for (let i = 0; i < dataMatrix.rows.length; i += 1) {
        const cell = dataMatrix.rows[i].cells[column];
        sums += dataMatrix.cells[cell].value;
      }
      resultArr.push((sums / dataMatrix.rows.length).toFixed(1));
    }
  }
  return resultArr;
};
