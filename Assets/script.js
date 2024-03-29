// Assignment code here
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//function to determine length of password
function determineLength(){
    passwordLength = prompt("Choose how many characters you'd like your password to be (8-128 characters):");

    if (passwordLength < 8){
        alert("Password must be between 8-128 characters");
        determineLength();

    }else if (passwordLength > 128){
        alert("Password must be between 8-128 characters");
        determineLength();

    }else if (isNaN(passwordLength)){
        alert("Password length must be between 8-128 characters");
        determineLength();

    }else{
        alert("The next three screens will ask what types of characters to include in your password.");
        }
    return passwordLength;
}

//Determines whether or not to include uppcase characters in password
function determineUppercase(){
    uppercaseCheck = prompt("Do you want to include uppercase letters in your password?");
        uppercaseCheck = uppercaseCheck.toLowerCase();

        if (uppercaseCheck === null || uppercaseCheck === ""){
            alert("Answer Yes or No");
            determineUppercase();

        }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
            uppercaseCheck = true;
            return uppercaseCheck;
        
        }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
            uppercaseCheck = false;
            return uppercaseCheck;

        }else {
            alert("Please enter Yes or No");
            determineUppercase();
        }
        
        return uppercaseCheck;
}

//Determine whether or not to include numbers in password
function determineNumbers(){
    numberCheck = prompt ("Do you want to include numbers in your password?");
        numberCheck = numberCheck.toLowerCase();

        if(numberCheck === null || numberCheck === ""){
            alert("Answer Yes or No");
            determineNumbers();

        }else if (numberCheck === "yes" || numberCheck === "y"){
            numberCheck = true;
            return numberCheck;

        }else if (numberCheck === "no" || numberCheck ==="n"){
            numberCheck = false;
            return numberCheck;

        }else {
            alert("Answer Yes or No");
            determineNumbers();
        }
        return numberCheck;
}

//Determine whether or not to include special characters in password

function determineSpecial(){
    specialCheck = prompt ("Do you want to include special characters in your password?");
        specialCheck = specialCheck.toLowerCase();

        if (specialCheck === null || specialCheck ===""){
            alert("Answer Yes or No");
            determineSpecial();

        }else if (specialCheck === "yes" || specialCheck === "y"){
            specialCheck = true;
            return specialCheck;

        }else if (specialCheck === "no" || specialCheck === "n"){
            specialCheck = false;
            return specialCheck;

        }else {
            alert("Answer Yes or No");
            determineSpecial();
        }
        return specialCheck;
}

//Takes all inputs from previous functions and generates password

function generatePassword(){
    determineLength();
    console.log(passwordLength);
    determineUppercase();
    console.log(uppercaseCheck);
    determineNumbers();
    console.log(numberCheck);
    determineSpecial();
    console.log(specialCheck);

    var characters = lowercaseChar;
    var password = "";
    if (uppercaseCheck && numberCheck && specialCheck){
        characters += uppercaseChar + numberChar + specialChar;

    }else if(uppercaseCheck && numberCheck){
        characters += uppercaseChar + numberChar;

    }else if(numberCheck && specialCheck){
        characters += numberChar + specialChar;

    }else if (uppercaseCheck && specialCheck){
        characters += uppercaseChar + specialChar;

    }else if (uppercaseCheck){
        characters += uppercaseChar;

    }else if (numberCheck){
        characters += numberChar;

    }else if (specialCheck){
        characters += specialChar;

    }else{
        characters === lowercaseChar;
    }

    for (var i = 0; i < passwordLength; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length));

    }
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
