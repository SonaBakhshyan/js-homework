// Write a function to check if a given string contains another substring.
function searchString(mainString, subString){
    for(let i = 0; i < mainString.length - subString.length; ++i){
        let j = 0;
        for(; j < subString.length; ++j){
            if(mainString[i + j] !== subString[j]){
                break;
            }
        }
        if(j === subString.length){
            return true;
        }
    }
    return false;
}
console.log (searchString("Hello Javascript", "Java"));
console.log (searchString("Hello Javascript", "HTML"));

//by flag

function getString(main, sub){
    for(let i = 0; i < main.length - sub.length; ++i){
        let matched = true;
        for(let j = 0; j < sub.length; ++j){
            if(main[i + j] !== sub[j]){
                matched = false;
                break;
            }
        }
        if(matched){
            return true;
        }
    }
    return false;
}
console.log(getString("Hello Javascript", "Java"));
console.log(getString("Hello Javascript", "HTML"));

//by includes() method

function someString(mainS, subS){
    return mainS.includes(subS);
}

console.log(someString("Hello Javascript", "Java"));
console.log(someString("Hello Javascript", "HTML"));