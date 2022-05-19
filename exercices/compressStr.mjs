/*
compress string:
aabbbcdd => a2b3c1d2
if the compressed string has the same length as tbe original string, return the original string.

*/

import { countChars } from './countChars.mjs';

const compressString = (str) => {
  let obj = countChars(str);
  let newStr = '';

  for (const key of Object.keys(obj)) {
    newStr += `${key}${obj[key]}`;
  }
  return newStr.length >= str.length ? str : newStr;
};

console.log(compressString('aaabbcdddd'));
console.log(compressString('aabccdddd'));
console.log(compressString('abcd'));
