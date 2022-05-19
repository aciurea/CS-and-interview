export const isPalindrom = (str) => {
  for (let i = 0; i < (str.length - 1) / 2; i++) {
    if (str[i] === str[str.length - 1 - i]) continue;
    return false;
  }
  return true;
};

// console.log(isPalindrom('cojoc'));
// console.log(isPalindrom('cojsoc'));
