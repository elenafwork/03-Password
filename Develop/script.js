// Assignment Code

var specialCharacters = ['!', '#','$', '%', '&', '*', '(',')','+','-', ',', '.', '/', ':', ';','<','=','>','?','@', '[',']','_','{','}','~','^', '|'];
var upperCase = ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e', 'f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


//prompts with password criteria from user
var minLength = window.prompt('Please, select the password criteria. \nWhat is the minimum length of the password?' );
console.log(minLength);
var maxLength = window.prompt (' Now , what about maximum length?');
console.log(maxLength);
var upper = window.confirm ('How about uppercase letters?');
console.log(upper);
var lower = window.confirm ('Lowercase may be?');
console.log(lower);
var special = window.confirm (' Do you want special characters?');
console.log(special);








var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
