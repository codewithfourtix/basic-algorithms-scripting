// Traverse a matrix in a spiral order, starting from the top-left corner and moving inwards.
function spiralOrder(matrix) {
  const result = [];
  while (matrix.length) {
    result.push(...matrix.shift());
    matrix.forEach((row) => result.push(row.pop()));
    matrix.reverse().forEach((row) => row.reverse());
  }
  return result;
}

// Example
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [1, 2, 3, 6, 9, 8, 7, 4, 5]
