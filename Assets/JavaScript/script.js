// Assignment Code
var generateBtn = document.querySelector("#generate");

const characterCollection = {
  number: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  special: ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', ';', ':', ',', '<', '.', '>', '/', '?']
}

function typeSelector()  {
  var result = [];
  result[0] = window.confirm("Do you want to include numbers in your password?");
  result[1] = window.confirm("Do you want to include lower case letters in your passowrd?");
  result[2] = window.confirm("Do you want to include upper case letters in your password?");
  result[3] = window.confirm("Do you want to include special characters in your password?");
  return result;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
