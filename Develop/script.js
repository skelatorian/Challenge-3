// Assignment code here
var generateBtn = document.querySelector("#generate");

//Get references to the #generate element

//Determining the Arrays (4)

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","^","`","{","|","}","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmLowerCase;
var confirmUpperCase;
//s this all we need?????

//error variables
// var validValue = true;

//validate function


// Throw a promp next to confirm user how many characters they want for their password.
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));
  

//loop back if the users inputs outside the parameter with a message here
//fix the bug where the user can type in "erugihj" and it will go through.. or maybe you aren't advanced enuogh to make that happen..?

while(confirmLength <=8 || confirmLength >=128) {
  // alert("The password length must be between 8-128 characters. Try again.");
  alert("The password length must be between 8-128 characters. Try again.");
  var confirmLength = (prompt("How many characters would you like your password to contain?"));
  } 




//User alert to confirm with the user how many characters they will have.
  alert(`Your password will have ${confirmLength} characters`);

// Setting parameters of the password based on critera
var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters.");
var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters.");    
var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters.");
var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters.");

  // The loop if input from user is outside the parameters 
  while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
    alert("You must choose at least one parameter");
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters.");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters.");    
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters.");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters.");   
} 

// Assign action from user input to password gen
  var passwordCharacters = []
  
if (confirmSpecialCharacter) {
  passwordCharacters = passwordCharacters.concat(specialChar)
}

if (confirmNumericCharacter) {
  passwordCharacters = passwordCharacters.concat(number)
}
  
if (confirmLowerCase) {
  passwordCharacters = passwordCharacters.concat(alphaLower)
}

if (confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat(alphaUpper)
}

  console.log(passwordCharacters);


      // Empty string to be filled based on for loop selecting random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random()*passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
