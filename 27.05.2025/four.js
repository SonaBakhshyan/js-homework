//Reverse the string "hello" without using a built-in function.

function getReverse(inputString){
    let result = "";
    for(i = inputString.length - 1; i >= 0; i--){
        result += inputString[i];
    }
    return result;
}
console.log(getReverse(something));