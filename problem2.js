const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function lowestValue (minValue) {
    const minNumber = Math.max(...minValue);
    return minNumber;
    
     
}



console.log(lowestValue(numbers));

