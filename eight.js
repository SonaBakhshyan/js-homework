// Compute the sum of all elements in the array let expenses = [50, 75, 100];.

function getSum(numberArray){
    let result = 0;

    for(let i = 0; i < numberArray.length; ++i){
        result += numberArray[i];
    }
    return result;
}
console.log(getSum([50, 75, 100]));

// built-in by reduce() method

function findSum(allNumberArray){
    return allNumberArray.reduce((accumulator, current) => accumulator + current, 0);
}
console.log(findSum([50, 75, 100]));