/*
Input Tact Coa
Output: True (permutatons: "tacto cat", "atco cta", etc)

*/

import { isPermutation } from './isPermutation.mjs';
import { isOdd } from './isOdd.mjs';

const countChars = (str) => {
  const countObj = {};
  for (const char of str) {
    if (!countObj[char]) countObj[char] = 1;
    else countObj[char] += 1;
  }
  return countObj;
};

const checkIfCanBePalindrom = (obj) => {
  let count = 0;
  const values = Object.values(obj);
  for (const value of values) {
    if (isOdd(value)) count += 1;
    if (count > 1) return false;
  }
  return count <= 1;
};

const isPermOfPalindrom = (str, permStr = str) => {
  const obj = countChars(permStr);
  if (!checkIfCanBePalindrom(obj)) return false;
  for (let i = 0; i < str.length; i++) {
    const substring = str.substring(i, i + permStr.length);

    if (isPermutation(substring, { ...obj })) return true;
  }

  return true;
};

// console.log(checkIfCanBePalindrom({ t: 2, a: 2, c: 2, o: 1 }));
console.log(isPermOfPalindrom('tactcoaov'));
console.log(isPermOfPalindrom('tactcoa', 'ctc'));
