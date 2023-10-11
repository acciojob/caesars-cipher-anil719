// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
 javascript
Copy code
function rot13(str) {
  // Define an empty string to store the encrypted result
  var result = "";

  // Loop through each character in the input string
  for (var i = 0; i < str.length; i++) {
    // Get the ASCII code of the current character
    var charCode = str.charCodeAt(i);

    // Check if the character is an uppercase letter
    if (charCode >= 65 && charCode <= 90) {
      // Apply the ROT13 transformation
      var encryptedCharCode = ((charCode - 65 + 13) % 26) + 65;

      // Convert the encrypted ASCII code back to a character and append it to the result
      result += String.fromCharCode(encryptedCharCode);
    } else {
      // For non-alphabetic characters, pass them on without any transformation
      result += str.charAt(i);
    }
  }

  // Return the encrypted result
  return result;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
