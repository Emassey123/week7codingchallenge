var personOne = "Danielle";

var personTwo = "Johnathan";

var personOneLength = personOne.length;

var personTwoLength = personTwo.length;

var lengthDifference = personOneLength - personTwoLength;

var difference = "shorter";


if(lengthDifference > 0){
    difference = "longer"
}
if(lengthDifference < 0){
    lengthDifference = lengthDifference * -1
}


console.log(`The name ${personOne} is ${difference} than  ${personTwo} by ${lengthDifference} charecter(s)`);
