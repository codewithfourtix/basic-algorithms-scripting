// Problem: Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
function longestConsecutive(nums) {
  const numSet = new Set(nums);
  let longestStreak = 0;

  for (let num of nums) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}

// Example usage:
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4
