// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {


var character = prompt("How many characters would you like in your password?");


// for (character.length < 8) { 
//   prompt ("Character length must be greater than 8 characters.")};
// let x = document.numb.value






  if (parseInt(character) < 8) { 
    confirm ("Character length must be greater than 8 characters.");}

    else if (parseInt(character) > 125) {
    confirm("Character length must be less than 125 characters");}

    
}

  // else if (character.valueOf.length > 125) { prompt ("Character length must be less than 125 characters.")};














// return "generated password";

// }






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// var lCase= confirm("Do you want lowercase letters included in your new password");

// var uCase= confirm("Do you want uppercase letters included in your new password");

// var nums= confirm("Do you want numbers included in your new password");

// var special= confirm("Do you want special characters included in your new password");