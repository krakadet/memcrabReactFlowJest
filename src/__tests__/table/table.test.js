// @flow
import { Table } from '../../table/Table';

const matrix = {
  cells: {
    safj: {
      id: 'safj',
      value: 254,
    },
    fhiw: {
      id: 'fhiw',
      value: 458,
    },
    emlm: {
      id: 'emlm',
      value: 548,
    },
    sdfksdm: {
      id: 'sdfksdm',
      value: 597,
    },
    fsfhsf: {
      id: 'fsfhsf',
      value: 548,
    },
    kjiwjo: {
      id: 'kjiwjo',
      value: 478,
    },
    lmdfflm: {
      id: 'lmdfflm',
      value: 487,
    },
    skjfk: {
      id: 'skjfk',
      value: 874,
    },
    kfowe: {
      id: 'kfowe',
      value: 154,
    },
  },
  rows: [
    {
      id: 'fhoih',
      cells: ['safj', 'fhiw', 'emlm'],
    },
    {
      id: 'wnef',
      cells: ['sdfksdm', 'fsfhsf', 'kjiwjo'],
    },
    {
      id: 'kljmf',
      cells: ['lmdfflm', 'skjfk', 'kfowe'],
    },
  ],
};

const cells = {
  safj: {
    id: 'safj',
    value: 254,
  },
  fhiw: {
    id: 'fhiw',
    value: 458,
  },
  emlm: {
    id: 'emlm',
    value: 548,
  },
  sdfksdm: {
    id: 'sdfksdm',
    value: 597,
  },
  fsfhsf: {
    id: 'fsfhsf',
    value: 548,
  },
  kjiwjo: {
    id: 'kjiwjo',
    value: 478,
  },
  lmdfflm: {
    id: 'lmdfflm',
    value: 487,
  },
  skjfk: {
    id: 'skjfk',
    value: 874,
  },
  kfowe: {
    id: 'kfowe',
    value: 154,
  },
};

describe('<Table />', () => {
  it('avgColumnmatrix', () => {
    const expectedAvg = ['446.0', '626.7', '393.3'];
    expect(Table.avgColumnMatrix(matrix, cells)).toEqual(expectedAvg);
  });
  it('newLightingCell', () => {
    const expectedNewLightingCell = ['safj', 'fhiw'];
    expect(Table.newLightingCell('kfowe', '2', cells)).toEqual(expectedNewLightingCell);
  });
});
