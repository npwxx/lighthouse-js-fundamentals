const range = function (start, end, step) {
  if (start === undefined || end === undefined || step === undefined) {
    return []
  }
  if (step <= 0) {
    return []
  }
  const result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i)
  }
  return result
}
//Returns empty arrays
console.log(range(10, 0, 2));
console.log(range(10, 30, -5));
console.log(range(-5, 2));
//Returns with arrays
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));