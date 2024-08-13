function firstNonRepeatedCharacter(s) {
    // Create a frequency map to store character counts
    const charCount = {};

    // Iterate through the string to populate the frequency map
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Iterate through the string again to find the first non-repeated character
    for (let char of s) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeated character
        }
    }

    // If no non-repeated character is found, return null
    return null;
}

// Test cases
console.log(firstNonRepeatedCharacter("swiss")); // "w"
console.log(firstNonRepeatedCharacter("repetition")); // "r"
console.log(firstNonRepeatedCharacter("aabbcc")); // null
console.log(firstNonRepeatedCharacter("abcabcde")); // "d"
console.log(firstNonRepeatedCharacter("")); // null
