// obj contains a counting of all characters that contains the permutation
// obj properties sum has the exact number of chars in the string str.
export const isPermutation = (str, obj) => {
  for (const char of str) {
    if (!obj[char]) return false;
    obj[char] -= 1;
  }

  return true;
};

// console.log(isPermutation('abcd', { a: 1, b: 1, c: 1, d: 1 }));
// console.log(isPermutation('abcdf', { a: 1, b: 1, c: 1, d: 1 }));
