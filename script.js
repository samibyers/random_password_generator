// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function passwordCriteria() {
//password length 
 {promt("How long do you want your password to be? (8-128 characters)")
 }
//upper case, lower case
 {confirm("Do you want to include UPPERCASE letters?")
 }
 {confirm("Do you want to include lowercase letter?")
 }
//numbers 
 {confirm("do you want to include numbers?")
 }
//special characters
 {confirm("Do you want to include special characters?")
 }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
//     var numeric = '0123456789';
//     var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';