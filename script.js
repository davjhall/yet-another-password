// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowerCase = ['abcdefghijklmnopqrstuvwxyz'];
var upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var theNums = ["0123456789"];
var specialCharacters = ["!@#$%^&*()_-+=[{]}:;'<>?/|"];
var allCharacters = "";


function generatePassword() {

  let generatedPassword = "";



var character = parseInt(prompt("How many characters would you like in your password?"));

  if (character < 8 || character > 125) { 
    alert ("Character length must be greater than 8 characters and less than 125 characters.");
   }

  

  allCharacters = []
    var lCase= confirm("Do you want lowercase letters included in your new password?");
  if(lCase) {
    allCharacters += lowerCase;}
  


 var uCase = confirm("Do you want uppercase letters included in your new password?");
  if(uCase) {
  allCharacters += upperCase;}



  var nums= confirm("Do you want numbers included in your new password?");
  if(nums) {
  allCharacters += theNums;}



  var special= confirm("Do you want special characters included in your new password");
  if(special) {
    allCharacters += specialCharacters;}

  

  for( var i = 0; i <= character; i++) {
    var randomNumber = Math.floor(Math.random() * allCharacters.length);
    generatedPassword += allCharacters.substring(randomNumber, randomNumber = 1);}


  return generatedPassword; 

}


  function writePassword() {
var password = generatePassword();
  
var passwordText = document.querySelector("#password");

passwordText.value = password;}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









// Write password to the #password input
