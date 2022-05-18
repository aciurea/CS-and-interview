const urlify = (str) => {
  let newStr = '';
  for (const char of str) {
    newStr += char === ' ' ? '%20' : char;
  }

  return newStr;
};

const urlify2 = (str) => str.split(' ').join('%20');

console.log(urlify('abc d e f g'));
console.log(urlify2('abc d e f g'));
