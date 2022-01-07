                //What the user will be prompted with when opening the browser

//Grabs first number the user puts in 
var userInputOne = Number(prompt("Enter a number"));

//grabs the operator the user chose
var operatorInput = prompt("Choose between adding subtracting multiplying or divide", "use '*' to multiply '/' to divide '-' to subtract '+' to add");

//grabs the second number the user puts in 
var userInputTwo  = Number(prompt("Enter a number"));


                    //Functions I will be using for the calcuator

//adding function
function add(userInputOne, userInputTwo){
    return (userInputOne + userInputTwo)
}

//subtracting function
function subtract(userInputOne, userInputTwo){
    return (userInputOne - userInputTwo)
}

//multiplying function
function multiply(userInputOne, userInputTwo){
    return  (userInputOne * userInputTwo)
}

//alert(` ${userInputOne} ${operatorInput} ${userInputTwo} = ${multiply(userInputOne, userInputTwo)}`)

//dividing function
function divide(userInputOne, userInputTwo){
    return (userInputOne / userInputTwo)
}

if (operatorInput === "+") {
    add(userInputOne, userInputTwo);
    alert(` ${userInputOne} ${operatorInput} ${userInputTwo} = ${add(userInputOne, userInputTwo)}`)
}
else if (operatorInput === "-") {
    subtract(userInputOne, userInputTwo);
    alert(` ${userInputOne} ${operatorInput} ${userInputTwo} = ${subtract(userInputOne, userInputTwo)}`)
}
else if (operatorInput === "*") {
    multiply(userInputOne, userInputTwo);
    alert(` ${userInputOne} ${operatorInput} ${userInputTwo} = ${multiply(userInputOne, userInputTwo)}`)
}
else if(operatorInput === "/") {
    divide(userInputOne, userInputTwo);
    alert(` ${userInputOne} ${operatorInput} ${userInputTwo} = ${divide(userInputOne, userInputTwo)}`)
}
else {
    alert("You've entered an invalid operator");
}

