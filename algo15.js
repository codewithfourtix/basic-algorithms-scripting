function removeDuplicates(arr) {
  let uniqueArr = [];

  // Iterate through the input array
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element is not already in the unique array
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]); // Add it to the unique array
    }
  }

  return uniqueArr;
}

// Example
const numbers = [1, 2, 3, 2, 4, 3, 5, 1, 6];
const uniqueNumbers = removeDuplicates(numbers);

console.log(`Array with duplicates removed: [${uniqueNumbers}]`);
// Expected output: Array with duplicates removed: [1, 2, 3, 4, 5, 6]
