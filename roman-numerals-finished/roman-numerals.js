function toRoman (num) {
  var numAsString = num.toString();
  var numOfDigits = numAsString.length;
  var romanNumeral = "";
  var charIndex = 0;
  while (numOfDigits > 0 ) {
    romanNumeral += getRoman(numOfDigits, numAsString.charAt(charIndex));
    numOfDigits--;
    charIndex++;
  }
  return romanNumeral;
}

function getRoman(place, digit) {
  var hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  if (place == 1) {
    return ones[digit];
  }
  if (place == 2) {
    return tens[digit];
  }
  if (place == 3) {
    return hundreds[digit];
  }
}

if (typeof exports !== 'undefined') {
   exports.toRoman = toRoman;
}
