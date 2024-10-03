//Conditional statements

//this function allows a prompt
const ps = require("prompt-sync");
const prompt =ps();

//prompt where the user can enter thier age
let age =prompt("enter your age:");

if (age<13){
    console.log("a child");
}else if (age>= 13 && age<= 19){
    console.log("a teenager");
}else if (age>=20){
    console.log("an adult");
}else{
    console.log("Invalid output");
}

