//@ts-check

function findPosition(arr, ball) {
  const jumpAmount = Math.floor(Math.sqrt(arr.length));
  let i = jumpAmount;

  for (; i < arr.length; i += jumpAmount) {
    if (ball <= arr[i]) break;
  }

  i -= jumpAmount;

  for (let j = 0; j <= jumpAmount; j++, i++) {
    if (ball === i) return i;
  }

  return -1;
}

const arr = Array.from({ length: 100 }, (_, i) => i);

console.log(findPosition(arr, 101));
