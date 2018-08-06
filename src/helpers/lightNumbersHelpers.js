export const findMaxIndexInArr = (lightArr, objData, valueToCompare) => {
  let maxDifference = 0,
    lightArrIndex = 0;
  for (let i = 0; i < lightArr.length; i += 1) {
    const currentDifference = Math.abs(objData.cells[lightArr[i]].value - valueToCompare);
    if (currentDifference > maxDifference) {
      maxDifference = currentDifference;
      lightArrIndex = i;
    }
  }
  return lightArrIndex;
};

export const newLightingCell = (idCell, cellsCount, dataMatrix) => {
  const lightArr = [];
  if (idCell !== undefined) {
    const currentValue = +dataMatrix.cells[idCell].value;
    for (const key in dataMatrix.cells) {
      if (key !== idCell) {
        const currentDiff = Math.abs(currentValue - dataMatrix.cells[key].value);
        if (lightArr.length < cellsCount) {
          lightArr[lightArr.length] = key;
        } else {
          const lightArrIndex = findMaxIndexInArr(lightArr, dataMatrix, currentValue);
          const diffArr = Math.abs(dataMatrix.cells[lightArr[lightArrIndex]].value - currentValue);
          if (diffArr > currentDiff) {
            lightArr[lightArrIndex] = key;
          }
        }
      }
    }
    return lightArr;
  }
  return lightArr;
};

export const findRowsWitchLight = (lightArr, dataMatrix) => {
  const rowArr = [];
  for (let i = 0; i < lightArr.length; i += 1) {
    for (let j = 0; j < dataMatrix.rows.length; j += 1) {
      for (let k = 0; k < dataMatrix.rows[j].cells.length; k += 1) {
        if (lightArr[i] === dataMatrix.rows[j].cells[k]) {
          rowArr.push(dataMatrix.rows[j].id);
        }
      }
    }
  }
  return rowArr;
};

export const getIdCell = event => event.currentTarget.id;

export const getIdRow = event => event.currentTarget.parentNode.id;
