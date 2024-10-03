//If Else If

//this function allows a prompt
const ps = require("prompt-sync");
const prompt =ps();

//prompt where the user can enter thier grade
let grade =prompt("enter your grade:");

if (grade>=90){
    console.log("Exellent");
} else if (grade>=80 && grade<=89){
    console.log("Good");
}else if (grade<=70 && grade<=79){
    console.log("Fair");
}else{
    console.log("Needs Improvement");
}