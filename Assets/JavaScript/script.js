// Refer to the generate button in index.html.
var generateBtn = document.querySelector("#generate");

// Define the character set that will be used to generate the password.
const characterCollection = [
  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', ';', ':', ',', '<', '.', '>', '/', '?']
]

// Helper function: typeSelector(), takes 4 user inputs from window.comfirm and return a list of 4 booleans.
function typeSelector ()  {
  var result = [];
  result[0] = window.confirm("Include numbers in your password? \nIf you do, click 'Ok', otherwise click 'Cancel' to move on.");
  result[1] = window.confirm("Include lower case letters in your passowrd?  \nIf you do, click 'Ok', otherwise click 'Cancel' to move on.");
  result[2] = window.confirm("Include upper case letters in your password?  \nIf you do, click 'Ok', otherwise click 'Cancel' to move on.");
  result[3] = window.confirm("Include special characters in your password?  \nIf you do, click 'Ok', otherwise click 'Cancel' to move on.");
  return result;
}

// Helper function: makeSample(), takes a list of 4 booleans and return a list of strings.
// Note: this function was designed to used to process the output from typeSelector(), if the length of input list is greater than 4, it might run into problems.
function makeSample(inputs) {
  var sample = [];
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i]) {
      sample = sample.concat(characterCollection[i]);
    }
  }
  return sample;
}

// Helper function: generatePassword(), takes a list of strings and a number, return a single string.
function generatePassword (sample, length) {
  let password = ""
  for (let i = 0; i < length; i++) {
    whichIndex = Math.floor(Math.random() * sample.length);
    password = password.concat(sample[whichIndex]);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  // Ask user to enter the desire length of password, if requirement is not met, ask user to re-enter the length.
  let userLength = parseInt(window.prompt("Please enter the desired length of your password, between 8 and 128."));
  let userType = typeSelector();

  // Check if the input from user meets the criterias.
  let lengthChecker = userLength >=8 && userLength <= 128;
  let typeChecker = userType.includes(true);

  // For invalid input, print an error message and ask the user to re-enter or exit.
  if (!lengthChecker && !typeChecker) {
    let userResponse = window.confirm("Invalid length: must be between 8 and 128. \nInvalid type: must include at least one type of character. \nClick 'Ok' to try again or click 'Cancel' to exit.");
    if (userResponse) {
      writePassword();
    } else {
      return;
    }
  } else if (!lengthChecker) {
    let userResponse = window.confirm("Invalid length: must be between 8 and 128. \nClick 'Ok' to try again or click 'Cancel' to exit.");
    if (userResponse) {
      writePassword();
    } else {
      return;
    }
  } else if (!typeChecker) {
    let userResponse = window.confirm("Invalid type: must include at least one type of character. \nClick 'Ok' to try again or click 'Cancel' to exit.");
    if (userResponse) {
      writePassword();
    } else {
      return;
    }
  } else {
    // If all inputs are valid, produce the password.
    let userSample = makeSample(userType);
    let password = generatePassword(userSample, userLength);
    let passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
