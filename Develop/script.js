
// Random Functions

//Random lower case letter
function randomLower() {
    return String.fromCharCode (Math.floor(Math.random() * 26) + 97);
}

//Random upper case letter
function randomUpper() {
  return String.fromCharCode (Math.floor(Math.random() * 26) + 65);
}

//Random number
function randomNumber() {
  return String.fromCharCode (Math.floor(Math.random() * 10) + 48);
}

//Random symbol
function randomSymbol() {
  var symbols = "!@#$%^&*~<>.,"
  return symbols [Math.floor (Math.random()* symbols.length)];

}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

function generatePassword() {
  var password = ""
  var passArray = [];
 
//check critera:
//check number of characters
var numberChar = document.getElementById("numberChar").value
//if statement to check if numbers are included
for (var i=0; i<numberChar; i++) {

  if (document.querySelector("#numbers").checked === true) {
    passArray.push(randomNumber())
  i++
  }
  
  //if statement to check if upCase are included
  if (document.querySelector("#upCase").checked === true) {
  passArray.push(randomUpper())
  i++
  }
  //if statement to check if lowCase are included
  if (document.querySelector("#lowCase").checked === true) {
passArray.push(randomLower())
i++
  }
  //if statement to check if symbols are included
  if (document.querySelector("#symbols").checked === true) {
passArray.push(randomSymbol())
i++
  }
}

password = passArray.join("")



//return
return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
