// Problem: Given a string s and a string p, return an array of all the start indices of p's anagrams in s
function findAnagrams(s, p) {
  const result = [];
  const pCount = Array(26).fill(0);
  const sCount = Array(26).fill(0);

  for (let i = 0; i < p.length; i++) {
    pCount[p.charCodeAt(i) - 97]++;
    sCount[s.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < s.length - p.length + 1; i++) {
    if (pCount.toString() === sCount.toString()) {
      result.push(i);
    }
    sCount[s.charCodeAt(i) - 97]--;
    if (i + p.length < s.length) {
      sCount[s.charCodeAt(i + p.length) - 97]++;
    }
  }

  return result;
}

// Example usage:
console.log(findAnagrams("cbaebabacd", "abc")); // Output: [0, 6]
