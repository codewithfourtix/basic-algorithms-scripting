// Convert an integer to its Roman numeral equivalent.
function intToRoman(num) {
  const map = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let roman = "";
  for (const { value, numeral } of map) {
    while (num >= value) {
      roman += numeral;
      num -= value;
    }
  }
  return roman;
}

// Example
console.log(intToRoman(1987)); // "MCMLXXXVII"
