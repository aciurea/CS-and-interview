export const isPalindrome = (value) => {
    if(value === null || value.length < 2) return true;

    for(let i = 0; i < value.length / 2; i++) {
        if(value[i] === value[value.length - 1 - i]) {
          continue;
        }
        else return false;
    }

    return true;
}

function test() {
    console.log(isPalindrome('cojocs'));
    // console.log(isPalindrom('cojoc'));
    console.log(isPalindrome('cojocc'));
    // console.log(isPalindrom('coc'));
}

test();