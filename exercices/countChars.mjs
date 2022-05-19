export const countChars = (str) => {
  const countObj = {};
  for (const char of str) {
    if (!countObj[char]) countObj[char] = 1;
    else countObj[char] += 1;
  }
  return countObj;
};
