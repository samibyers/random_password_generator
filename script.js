// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  if(password =="failed") {
    writePassword()
  } else {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//define variables
var temp = []
var final= []
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var num = ["1","2","3","4","5","6","7","8","9","0"]
var spChar = ["!","@","#","$","%","^","&","*","(",")"]

//create function for pop-up user inputs
function generatePassword() {
//clear last password??? could not get this to work.

//password length 
var length = parseInt(prompt("How long do you want your password to be? (8-128 characters)"));
if (isNaN(length) || length <8 || length >128) {
  alert("Please input a valid number (8-128)");
  return "failed"
}
//upper case
 if(confirm("Do you want to include UPPERCASE letters?")) {
      temp = temp.concat(upperCase)
 }
 //lower case
 if(confirm("Do you want to include lowercase letter?")) {
  temp = temp.concat(lowerCase)
 }
//numbers 
 if(confirm("do you want to include numbers?")) {
  temp = temp.concat(num)
 }
//special characters
 if(confirm("Do you want to include special characters?")) {
      temp = temp.concat(spChar)
 }
 //for loop that compiles chosen length of temporary variables into the final password
 for (let i = 0; i < length; i++) {
   var randomPassword = temp[Math.floor(Math.random()*temp.length)];
   final.push(randomPassword);
 }
return final.join("").toString();
};



