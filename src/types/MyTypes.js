// @flow

export type Matrix = {
  rows: $ReadOnlyArray<{
    id: string,
    cells: $ReadOnlyArray<string>
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
    cells: $ReadOnlyArray<string>
  },
  cells: {
    [key: string]: {
      id: string,
      value: number
    },
  }
}
export type GetState = () => Object;
