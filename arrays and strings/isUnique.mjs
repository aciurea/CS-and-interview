const isUnique = (str) => {
  const obj = {};

  for (const char of str) {
    if (obj[char] === undefined) obj[char] = 1;
    else return false;
  }

  return true;
};

const isUnique2 = (str) => new Set([...str]).size === str.length;

const t0 = performance.now();
console.log(isUnique('abcdefg'));
console.log(performance.now() - t0);
