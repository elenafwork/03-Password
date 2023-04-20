// Assignment Code
var generateBtn = document.querySelector("#generate");

// creating array for upper, lower cas letters and special characters
var specialCharacters = ['!', '#','$', '%', '&', '*', '(',')','+','-', ',', '.', '/', ':', ';','<','=','>','?','@', '[',']','_','{','}','~','^', '|'];
var upperCase = ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e', 'f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = [1, 2, 3, 4, 5, 6, 7, 9, 0];
console.log(specialCharacters);
console.log(upperCase);
console.log(lowerCase);
console.log(numbers);


function generatePassword(){
  //prompts with password length from user
  var minLength =Number( window.prompt('Please, select the password criteria. \nWhat is the minimum length of the password?' ));
  console.log(minLength); 
  
   while (minLength<8){
     window.alert("The password length can't be less than 8 characters. Please try again!")
     var minLength =Number( window.prompt('Please, select the password criteria. \nWhat is the minimum length of the password?' ));
      console.log(minLength); 
      
    } 
 
  
  var maxLength = Number( window.prompt (' Now , what about maximum length?') );
  console.log(maxLength);
  while (maxLength>128) {
    window.alert("The password length can not exceed 128 characters. Try again!");
    var maxLength = Number( window.prompt (' Now , what about maximum length?') );
  console.log(maxLength);
  }

  

  // calculating password length
  var randomPlus = Math.round(Math.random()* (maxLength-minLength));
  console.log(randomPlus);
  var passwordLength = randomPlus + minLength;
  console.log('the password length is ', passwordLength);


  //promts about presents of upper, lower case letters and special characters

  var upper = window.confirm ('How about uppercase letters?');
  console.log(upper);

  var lower = window.confirm ('Lowercase may be?');
  var number = window.confirm ('What about numbers?');

  var special = window.confirm (' Do you want special characters?');
  console.log(special);

  //alert if everythng is false
  if (upper==false && lower==false && special==false && number==false) {
    window.alert('Try again!');
  }

  var upperArrayLength;
  var lowerArrayLength;
  var specialLength;
  var numbersArrayLength;
  var upperArray =[];
  var lowerArray =[];
  var specialArray =[];
  var numbersArray=[];

  //function for uppercase in the password
  function upperLength () {
    upperArrayLength = Math.round((Math.random() * (passwordLength ))/2 );
    if (upperArrayLength >=1 && upperArrayLength<=(passwordLength-2)) {
    upperArray = new Array(upperArrayLength);
    for (i=0; i<upperArrayLength; i++) {
        var randomUppercase = upperCase[Math.floor(Math.random() * upperCase.length)];
        upperArray[i]=randomUppercase;       
        
    }
    } else {
    upperLength();
    }
  }


  if (upper) {
    upperLength();
    
  } else {
    upperArrayLength = 0;
  //let upperArray = [];
  }

  console.log('uppercase letters array : ',upperArray);

  //function for lowercase part
  function lowerLength() {
    lowerArrayLength = Math.round(Math.random() * passwordLength);
    if (lowerArrayLength>=1 && lowerArrayLength<=(passwordLength-upperArrayLength-1)) {
        lowerArray = new Array(lowerArrayLength);
        for(i=0; i<lowerArrayLength;i++){
            var randomLowercase = lowerCase[Math.floor(Math.random()*lowerCase.length)];
            lowerArray[i] = randomLowercase;
        }
    } else {
        lowerLength();
    }
    
  }


  if (lower) {
    lowerLength();
  } else {
    lowerArrayLength=0;
    //let lowerArray= [];
  }

  console.log('lowercase letters array : ',lowerArray); 

  //function for numbers

  function numbersLength() {
    numbersArrayLength = Math.round(Math.random() * passwordLength);
    if (numbersArrayLength>=1 && numbersArrayLength<=(passwordLength-upperArrayLength-lowerArrayLength-1)) {
        numbersArray = new Array(numbersArrayLength);
        for(i=0; i<numbersArrayLength;i++){
            var randomNumber = numbers[Math.floor(Math.random()*numbers.length)];
            numbersArray[i] = randomNumber;
        }
    } else {
        numbersLength();
    }
    
  }
  if (number) {
    numbersLength();
  } else {
    numbersArrayLength=0;
    
  }
   console.log ('numbers array: ', numbersArray)

   //special characters
  function specialLength() {
    specialArrayLength = passwordLength-upperArrayLength-lowerArrayLength - numbersArrayLength;
    specialArray = new Array(specialArrayLength);
    for (i=0; i<specialArrayLength; i++) {
        var randomSpecial= specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
        specialArray[i]=randomSpecial;
    }
  }

  if(special){
    specialLength();

  } else {
    specialArrayLength=0;
  // let specialArray=[];
  }
  console.log(' special characters array: ',specialArray);

  //merging arrays

  var passwordArray= upperArray.concat(specialArray, lowerArray, numbersArray);
  console.log(passwordArray);

  //shuffle elements in the password array
  var shuffle = Math.round(Math.random()*10 + 10);
  for (i=1; i<=shuffle; i++){
  passwordArray.sort(function(){return 0.5 - Math.random()});
  }
  console.log(passwordArray);
  var password = passwordArray.join("");
  console.log(password);
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
