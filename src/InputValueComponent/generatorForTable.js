// @flow

function getRandom(): number {
  const min = 10;
  const max = 20;
  return Math.floor(Math.random() * (max - min)) + min;
}


export default function* generatorInputValue(): Generator<number, void, string> {
  yield getRandom();
  yield getRandom();
  yield getRandom();
}
