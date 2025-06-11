function longestSeq(str) {
  let finalSum = 0;
  let sum = 0;
  let left = 1;
  let lastIdx = 0;

  for (let i = 0; i < str.length; ++i) {
    const char = str[i];

    if (char === "1") {
      sum += 1;

      if (sum > finalSum) finalSum = sum;
      continue;
    }

    left -= 1;

    if (left === 0) {
      lastIdx = i; //try again from next char. you can do i + 1 and reset it on i = lastIdx BUT the ; i++ from for loop will move it to the next position. Better to be equal to i;

      sum += 1;

      if (sum > finalSum) finalSum = sum;

      continue;
    }

    sum = 0;
    left = 1;
    i = lastIdx;
  }

  return finalSum;
}
