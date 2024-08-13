function findMissingNumber(arr) {
    const n = arr.length + 1;
    
    // Calculate the sum of the first n natural numbers
    const expectedSum = (n * (n + 1)) / 2;
    
    // Calculate the sum of elements in the array
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    
    // The missing number is the difference between expected and actual sums
    return expectedSum - actualSum;
}

// Test cases
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5])); // 6
console.log(findMissingNumber([1, 2, 3, 5])); // 4
console.log(findMissingNumber([2, 3, 4, 5, 6])); // 1
console.log(findMissingNumber([1, 2, 4, 5])); // 3
