// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}



button.onclick = function passwordCriteria() {
//password length 
var length = promt("How long do you want your password to be? (8-128 characters)")

//upper case, lower case
 var upperCase = confirm("Do you want to include UPPERCASE letters?")
 if(upperCase === true) {
      charsToInclude.push("uc")
 }
 var lowerCase = confirm("Do you want to include lowercase letter?")
 if(lowerCase === true) {
      charsToInclude.push("lc")
 }
//numbers 
 var num = confirm("do you want to include numbers?")
 if(num === true) {
      charsToInclude.push("nu")
 }
//special characters
 var spChar = confirm("Do you want to include special characters?")
 if(spChar === true) {
      charsToInclude.push("sp")
 }
return;
};




// var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
//     var numeric = '0123456789';
//     var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';