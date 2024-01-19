
// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56 
// Function: getNumberFromString(s)

function getNumberFromString(s) {
    var digitsOnly = s.replace(/\D/g, '');
    var result = parseInt(digitsOnly, 10);

    return result;
}

var inputString = "hell5o wor6ld";
var resultNumber = getNumberFromString(inputString);
console.log(resultNumber);  
