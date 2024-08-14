function intersection(arr1, arr2) {
    // Convert the first array to a Set to remove duplicates and for fast lookup
    const set1 = new Set(arr1);
    
    // Use a Set to store the intersection to ensure uniqueness
    const intersectionSet = new Set();

    // Iterate through the second array and add common elements to the intersection set
    for (let num of arr2) {
        if (set1.has(num)) {
            intersectionSet.add(num);
        }
    }

    // Convert the intersection set back to an array
    return Array.from(intersectionSet);
}

// Test cases
console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9]
console.log(intersection([1, 3, 5, 7], [2, 4, 6, 8])); // []
console.log(intersection([2, 4, 6, 8], [8, 6, 4, 2])); // [2, 4, 6, 8]
console.log(intersection([], [1, 2, 3])); // []
