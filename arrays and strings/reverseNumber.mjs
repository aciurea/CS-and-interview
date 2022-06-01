function reverseNum(num) {
  let reverse = 0;

  while (num > 0) {
    const digit = num % 10;

    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }

  return reverse;
}

console.log(reverseNum2(1234));

function reverseNum2(num) {
  return +num.toString().split('').reverse().join('');
}

Number.prototype.reverse = function () {
  let num = this;
  let reversed = 0;

  while (num > 0) {
    const digit = num % 10;
    num = Math.floor(num / 10);
    reversed = reversed * 10 + digit;
  }

  return reversed;
};

const a = 12345;
console.log(a.reverse());
