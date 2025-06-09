// Create a function that accepts a number and returns whether it is even or odd.
function checkEvenOdd(numbers){
    if(numbers % 2 !== 0){
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkEvenOdd(5));
console.log(checkEvenOdd(8));