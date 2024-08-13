// Problem: If you want to check if the string "hey how are You"(sample) ends with the substring "You"(sample), here's how you can do it:

function confirmEnding(str, target) {
    let i = str.length; // Length of the main string
    let coco = target.length; // Length of the target string
    
    // Check if the ending of str matches target
    if (str.slice(i - coco) === target) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(confirmEnding("hey how are You", "You")); // Output: true
  