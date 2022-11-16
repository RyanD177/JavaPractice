"use strict";
var readlineSync= require("readline-sync");
// using is Nan and isFinite to handle error input and tell the user to input valid things, if they enter something wrong.

function isDigit(num) { // check if valid digit or not
 return !isNaN(parseFloat(num))&&isFinite(num);



} 




function main() {
    var x = readlineSync.question("What should i  divide 100 with?: ");

    while(!isDigit(x)){
        x = readlineSync.question("Please input valid input");
    }
    console.log(100/x);


} 



if (require.main === module){

 main () ;
}