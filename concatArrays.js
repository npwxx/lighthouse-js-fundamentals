const concat = function (array1, array2) {
  const result = [];
  for (const value of array1) {
    result.push(value);
  }
  for (const value of array2) {
    result.push(value);
  }
  return result;
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
const concat2 = function (array1, array2) {
  return array1.concat(array2)
}

console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);