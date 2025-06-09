// Check if the string "Learning JavaScript" contains the substring "Java".

function findCheck(bigString, sub){
    for(let i = 0; i < bigString.length - sub.length; ++i){
        let match = true;
        for(let j = 0; j < sub.length; ++j){
            if(bigString[i + j] != sub[j]){
                match = 0;
                break;
            }
        }
        if(match){
            return true;
        }
    }
    return false;
}
console.log(findCheck("Learning Javascript", "Java"))