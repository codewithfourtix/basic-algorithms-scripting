function generateSpiralMatrix(n) {
  // Create an n x n matrix filled with zeros
  let matrix = Array.from({ length: n }, () => Array(n).fill(0));

  let value = 1;
  let top = 0,
    bottom = n - 1;
  let left = 0,
    right = n - 1;

  while (value <= n * n) {
    // Traverse from left to right
    for (let i = left; i <= right; i++) {
      matrix[top][i] = value++;
    }
    top++;

    // Traverse from top to bottom
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = value++;
    }
    right--;

    // Traverse from right to left
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = value++;
    }
    bottom--;

    // Traverse from bottom to top
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = value++;
    }
    left++;
  }

  return matrix;
}

// Example
const size = 4;
const spiralMatrix = generateSpiralMatrix(size);
console.log(spiralMatrix);
