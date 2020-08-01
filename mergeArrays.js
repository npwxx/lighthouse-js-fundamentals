/*
Create a function that when given two sorted arrays containing numbers, returns a sorted array of the numbers from both lists 
*/
function merge (array1, array2) {
  const array3 = array1.concat(array2)
  array3.sort((a, b) => a - b)
  return array3
}


console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);