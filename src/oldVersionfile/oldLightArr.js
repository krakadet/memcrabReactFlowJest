newLightingCell = (idCell: string, cellsCount: number, dataMatrix: Matrix): Array<string> => {
  const findMaxIndexInArr = (lightArr: Array<string>, objData: Matrix, valueToCompare): number => {
    let maxDifference = 0;
    let lightArrIndex = 0;
    for (let i = 0; i < lightArr.length; i += 1) {
      const currentDifference = Math.abs(objData.cells[lightArr[i]].value - valueToCompare);
      if (currentDifference > maxDifference) {
        maxDifference = currentDifference;
        lightArrIndex = i;
      }
    }
    return lightArrIndex;
  };
  const lightArr = [];
  if (idCell !== undefined) {
    const currentValue: number = +dataMatrix.cells[idCell].value;
    for (const key in dataMatrix.cells) {
      if (key !== idCell) {
        const currentDiff: number = Math.abs(currentValue - dataMatrix.cells[key].value);
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