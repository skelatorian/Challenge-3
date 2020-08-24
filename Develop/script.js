// Assignment code here
var generateBtn = document.querySelector("#generate");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Determining the Arrays (4)

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")","-","+","/","<",">","?"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmLowerCase;
var confirmUpperCase;
//s this all we need?????

// Throw a promp next to confirm user how many characters they want for their password.
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

//loop back if the users inputs outside the parameter with a message here

while(confirmLength <= 8 || confirmLength >= 128) {
  alert("The password length must be between 8-128 characters. Try again.");
  var confirmLength = (prompt("How many characters would you like your password to contain?"));
  } 

//User alert to confirm with the user how many characters they will have.
alert('Your password will ahve ${confirmLength} characters');














// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}
