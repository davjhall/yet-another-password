// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var character= prompt("How many characters would you like your password to be?");

var lCase= prompt("Do you want lowercase letters included in your new password");

var uCase= prompt("Do you want uppercase letters included in your new password");

var nums= prompt("Do you want numbers included in your new password");

var special= prompt("Do you want special characters included in your new password");

