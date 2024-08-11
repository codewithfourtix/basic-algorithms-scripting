// Problem: Repeat a given string str (first argument) for num times (second argument).
//  Return an empty string if num is not a positive number.
//   For the purpose of this challenge, do not use the built-in .repeat() method.

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