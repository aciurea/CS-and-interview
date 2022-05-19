// @ts-check

/*
 Given 2 strings, return true if the required changes are 0 ore 1.
 Changes can be: replace, add, remove.
*/

function checkWhenLengthIsTheSame(str0, str1) {
  let count = 0;
  for (let i = 0; i < str0.length; i++) {
    const char0 = str0[i];
    const char1 = str1[i];
    if (char0 !== char1) count += 1;

    if (count > 1) return false;
  }
  return true;
}

function checkWhenLengthIsDifferent(str0 = '', str1 = '') {
  let [bigString, smallString] =
    str0.length > str1.length ? [str0, str1] : [str1, str0];
  let count = -1; // allow one change for inserting a new char.
  // iterage over the biggerString
  for (let i = 0; i < bigString.length; i++) {
    const char0 = bigString[i];
    const char1 = smallString[i];

    if (char0 !== char1) {
      count += 1;
      // update the smallString by inserting the character that is different. only the first time.
      // adding a new character each time won't affect the algorithm (by that time, we already encountered 2 changes),
      // but is just extra work that can be skipped.
      smallString =
        count === 0
          ? `${smallString.substring(0, i)}${char0}${smallString.substring(
              i,
              smallString.length
            )}`
          : smallString;
    }

    if (count > 0) return false;
  }

  return true;
}

function oneWay(str0, str1) {
  if (str0 === str1) return true;

  const isLengthTwoBig = Math.abs(str0.length - str1.length) > 1;
  if (isLengthTwoBig) return false;

  if (str0.length === str1.length) return checkWhenLengthIsTheSame(str0, str1);

  return checkWhenLengthIsDifferent(str0, str1);
}

const log = (msg, bool) => console.log(`${msg} => ${bool}`);
log('true', oneWay('ale', 'alev') === true);
log('true', oneWay('ale', 'alee') === true);
log('true', oneWay('ale', 'alve') === true);
log('true', oneWay('ale', 'ale') === true);
log('false', oneWay('ale', 'alecv') === true);
log('false', oneWay('ale', 'avee') === true);
log('false', oneWay('ale', 'elee') === true);
