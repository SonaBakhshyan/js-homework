// Write a function that returns the sum of all elements in an array of numbers.
function getSum(sumArray){
    let res = 0;
    for(let i = 0; i < sumArray.length; ++i){
        res += sumArray[i];
    }
    return res;
}
console.log(getSum([1, 2, 3, 4]));

// built-in by reduce() method

function allSum(allSumArray){
    return allSumArray.reduce(function(sum, num){
        return sum + num;
    }, 0);
}
console.log(allSum([1, 2, 3, 4]));