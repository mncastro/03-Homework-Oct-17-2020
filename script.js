// I used the solution provided in a github repository. I rewrite the code with IF statements (instead of WHILE loops) and added an additional prompt that informs the user they need to input a valid number if they input a letter by mistake in the first prompt.
// Credit goes to Tiffany Casey for the base code: https://github.com/TiffanyCasey/Password-Generator

//Assignment Code + Event Listener to prompt questions when button pushed
clickButton = document.querySelector("#generate")
clickButton.addEventListener("click", writePassword);

// Arrays with numbers and strings 
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lettersLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Empty variable for storing user's desired number of characters 
var answerLength = "";

// Undefined variables for storing user's answers to password criteria 
var answerSpecialChara;
var answerNumbers;
var answerUpperCase;
var answerLowerCase;

// Prompt to confirm the number of characters input by the user

function generatePassword() {
    
  var answerLength = (prompt("How many characters would you like your password to contain?"));
  // Loop if answer is outside the parameters 
    if (answerLength <= 8 || answerLength >= 128) {
      alert("Password length must be between 8-128 characters. Try again");
      var answerLength = (prompt("How many characters would you like your password to contain?")); 
    } else {
  
    // Declare number of characters input by user
      alert("Your password will have " + answerLength + " characters");
    }

    // Determine parameters of password stablished by user
      var answerSpecialChara = confirm("Would you like your password to include special characters?");
      var answerNumbers = confirm("Would you like your password to include numeric characters?");    
      var answerLowerCase = confirm("Would you like your password to include lowercase characters?");
      var answerUpperCase = confirm("Would you like your password to include uppercase characters?");
      
    // Loop if prompts do not include at least one criteria 
      if (answerUpperCase === false && answerLowerCase === false && answerSpecialChara === false && answerNumbers === false) {
        alert("You must choose at least one parameter");
        var answerSpecialChara = confirm("Would you like your password to include special characters?");
        var answerNumbers = confirm("Would you like your password to include numeric characters?");    
        var answerLowerCase = confirm("Would you like your password to include lowercase characters?");
        var answerUpperCase = confirm("Would you like your password to include uppercase characters?");   
    } 

      // Store random parameters in new variable and concatenate them
    var passwordCharacters = []
      
    if (answerSpecialChara) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (answerNumbers) {
      passwordCharacters = passwordCharacters.concat(numbers)
    }
      
    if (answerLowerCase) {
      passwordCharacters = passwordCharacters.concat(lettersLowerCase)
    }

    if (answerUpperCase) {
      passwordCharacters = passwordCharacters.concat(lettersUpperCase)
    }

      console.log(passwordCharacters)

      // Variable with empty string to store final password
      var randomPassword = "";
      
      for (var i = 0; i < answerLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Input random password into new variable inside function that prints final password version
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
      