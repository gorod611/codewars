snail = function(array) {
  // enjoy
  let arrayResult = [];
  while (array.length) {
    array.length && arrayResult.push(...array.shift());
    array.length &&
      arrayResult.push(
        ...array.reduce((acc, item, index) => {
          acc.push(array[index].pop());
          return acc;
        }, [])
      );
    array.length && arrayResult.push(...array.pop().reverse());
    array.length &&
      arrayResult.push(
        ...array
          .reduce((acc, item, index) => {
            acc.push(array[index].shift());
            return acc;
          }, [])
          .reverse()
      );
  }
  return arrayResult;
};
const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(snail(array));
