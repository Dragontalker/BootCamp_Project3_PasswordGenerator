// Assignment Code
var generateBtn = document.querySelector("#generate");

const characterCollection = [
  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', ';', ':', ',', '<', '.', '>', '/', '?']
]

function typeSelector ()  {
  var result = [];
  result[0] = window.confirm("Do you want to include numbers in your password?");
  result[1] = window.confirm("Do you want to include lower case letters in your passowrd?");
  result[2] = window.confirm("Do you want to include upper case letters in your password?");
  result[3] = window.confirm("Do you want to include special characters in your password?");
  return result;
}

function makeSample(inputs) {
  var sample = [];
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i]) {
      sample = sample.concat(characterCollection[i]);
    }
  }
  return sample;
}

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
  var userLength;
  var userSample;
  var password;

  // Ask user to enter the desire length of password, if requirement is not met, ask user to re-enter the length.
  userLength = parseInt(window.prompt("Please enter the desired length of your password, between 8 and 128."));
  userType = typeSelector();

  lengthChecker = userLength >=8 && userLength <= 128;
  typeChecker = userType.includes(true);

  if (!lengthChecker && !typeChecker) {
    let userResponse = window.confirm("Error: Invalid length and types. Re-enter!");
    if (userResponse) {
      writePassword();
    } else {
      return;
    }
  } else if (!lengthChecker) {
    let userResponse = window.confirm("Error: Invalid length. Re-enter!");
    if (userResponse) {
      writePassword();
    } else {
      return;
    }
  } else if (!typeChecker) {
    let userResponse = window.confirm("Error: Invalid type. Re-enter!");
    if (userResponse) {
      writePassword();
    } else {
      return;
    }
  } else {
    userSample = makeSample(userType);
    password = generatePassword(userSample, userLength);
  
  var passwordText;
  passwordText = document.querySelector("#password");
  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
