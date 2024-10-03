//Switch Statement

//this function allows a prompt
const ps = require("prompt-sync");
const prompt =ps();

//prompt where the user can enter thier age
let day =prompt("enter a day of day of the week:");

switch (day){
    case "Monday":
     console.log("It's Monday");
     break;
     case "Tuesday":
     console.log("It's Tuesday");
    break;
default:
    console.log("Monday or tuesday");
}