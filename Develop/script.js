function randomNumber() {
  return String.fromCharCode (Math.floor(Math.random() * 10) + 48);

}

function randomUpper() {
  return String.fromCharCode (Math.floor(Math.random() * 26) + 65);
}

function randomLower() {
  return String.fromCharCode (Math.floor(Math.random() * 26) + 97);
}

function randomSymbol() {
  var symbols = "!@#$%^&*~<>.,"
  return symbols [Math.floor (Math.random()* symbols.length)];
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var password = ""
  var passArray = [];
  var numberChar = document.getElementById("numberChar").value

  for (var i=0; i<numberChar; i++) {
  
    if (document.querySelector("#numbers").checked) {
      passArray.push(randomNumber()) 
    } 
    if (document.querySelector("#upCase").checked) {
     passArray.push(randomUpper())  
    } 
    if (document.querySelector("#lowCase").checked) {    
      passArray.push(randomLower())
    } 
    if (document.querySelector("#symbols").checked) { 
      passArray.push(randomSymbol())
    }  
  }
  for (var i=0; i<numberChar; i++) {
    var index= Math.floor(Math.random()*passArray.length)
    
    password += passArray[index]
      }
      return password
      }
  
 







  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
