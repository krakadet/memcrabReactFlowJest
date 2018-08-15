// @flow

// MyTypes.js
export type Matrix = {
  rows: Array<{
    id: string,
    cells: Array<string>
  }>,
  cells: {
    [key: string]: {
      id: string,
      value: number
    },
  };
}


export type Row = {
  id: string,
  cells: Array<string>
}

export type createTableButtonClickAction = {
  type: string,
payload: {
}
}


