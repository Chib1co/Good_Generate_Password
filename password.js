//user confirm password criteria
//confirm lower case
function firstFunction(){   

let lowerCaseChar = confirm("Do you want to use Lowercase charactors?");
//confirm upper case
let upperCaseChar = confirm("Do you want to use UpperCase charactors?");
//confirm numbersvar
let numberChar = confirm("Do you want to use Numbers?");
//confirm symbols
let symbolChar = confirm("Do you want to use Symbols?");

//ask password length between 8 to 128 charactor
let passWordLength = parseInt(prompt("How long would you like to have your password?"))

//console.log to check
console.log(lowerCaseChar, upperCaseChar, numberChar, symbolChar, passWordLength);

//generating password based on what user choose
let dataset = "";

let lowerCaseCharSet = "abcdefghijklmnopqrstuvwxyz";
let upperCaseCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numberCharSet = "123456789";
let symbolCharSet = "#$%&()=!?@"

if(lowerCaseChar){
   dataset = dataset + lowerCaseCharSet;
} 
if(upperCaseChar){
    dataset = dataset + upperCaseCharSet;
}
if(numberChar){
    dataset = dataset + numberCharSet;
}
if(symbolChar){
    dataset = dataset + symbolCharSet;
}
if(passWordLength < 8 || passWordLength > 128){
    alert("your password length has to be between 8 to 128 charactors");
}

console.log(dataset);


// Generate the button, and when the user clicks on it, execute the function

    let pass = "";
    for (let i = 0; i < passWordLength; i++) {
        
        let num = Math.floor(Math.random() * dataset.length);
       
        pass += dataset.substring(num, num+1);
    }
    console.log(pass)

    return pass ;
};



function writePassword(){
    pass = firstFunction()
let textAreaEl = document.querySelector("#password");


   
//textAreaEl.textContent = pass;
textAreaEl.value = pass;

}

let generateEl = document.querySelector("#generate")

generateEl.addEventListener("click", writePassword) 