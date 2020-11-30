//user confirm password criteria
//confirm lower case

var lowerCaseChar = confirm("Do you want to use Lowercase charactors?");
//confirm upper case
var upperCaseChar = confirm("Do you want to use UpperCase charactors?");
//confirm numbersvar
var numberChar = confirm("Do you want to use Numbers?");
//confirm symbols
var symbolChar = confirm("Do you want to use Symbols?");

//ask password length between 8 to 128 charactor
var passWordLength = prompt("How long would you like to have your password?")


//generating password based on what user choose
var dataset = "";

var lowerCaseCharSet = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharSet = "123456789";
var symbolCharSet = "#$%&()=!?@"

if(lowerCaseChar){
   dataset = dataset + lowerCaseCharSet;
} 
if(upperCaseChar){
    dataset = dataset + upperCaseCharSet;
}
if(numberCharSet){
    dataset = dataset + numberChar;
}
if(symbolCharSet){
    dataset = dataset + symbolChar;
}
if(passWordLength >= 8 && passWordLength <= 128){
    passWordLength === dataset.length;
}else{
    alert("your password length has to be between 8 to 128 charactors");
}

function getRandomChar(charset){
    let randomIndex = Math.floor(Math.random() * charset.length);
    return charset[randomIndex];
}



//function add(lowerCaseCharSet, upperCaseCharSet, numberCharSet, symbolCharSet){
 //var result = [lowerCaseCharS + upperCaseCharSet + numberCharSet + symbolCharSet];
// return result;
 ////console.log(result);
}


//computer pick ramdom charactor depend of the length user choose


