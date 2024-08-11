function repeatStringNumTimes(str, num) {
    let coco = num;
    let mono = str;
    let i = 0;
    let repeatedStr = ""; // Initialize an empty string to hold the repeated string
  
    if (num < 0) {
      repeatedStr = ""; // If num is negative, return an empty string
    } else {
      while (i < coco) {
        repeatedStr += mono; // Append the original string to the result
        i++;
      }
    }
  
    return repeatedStr;
  }
  
  console.log(repeatStringNumTimes("abc", 3)); // Output: "abcabcabc"