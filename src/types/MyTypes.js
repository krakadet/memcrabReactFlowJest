// @flow


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
  row: {
    id: string,
    cells: Array<string>
  },
  cells: {
    [key: string]: {
      id: string,
      value: number
    },
  }
}