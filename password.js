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

//setting carachtors based on what user choose to use
let dataset = "";

let lowerCaseCharSet = "abcdefghijklmnopqrstuvwxyz";
let upperCaseCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numberCharSet = "123456789";
let symbolCharSet = "#$%&()=!?@"

//making condition to add into dateset
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


// roop the charactores until reach the length user choose

    let pass = "";
    for (let i = 0; i < passWordLength; i++) {
        
        let num = Math.floor(Math.random() * dataset.length);
       
        pass += dataset.substring(num, num+1);
    }
    console.log(pass)

    return pass ;
};


//generating password use first function
function writePassword(){
    pass = firstFunction()
let textAreaEl = document.querySelector("#password");


   

textAreaEl.value = pass;

}

//Click the cotton to start the event
let generateEl = document.querySelector("#generate")

generateEl.addEventListener("click", writePassword) 