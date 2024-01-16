// @ts-check
function binarySearch(arr, value) {
  let lo = 0;
  let hi = arr.length;
  let i = 0;
  do {
    console.log("times ", i++);
    const mid = lo + Math.floor((hi - lo) / 2);

    if (value === arr[mid]) return true;
    if (value > arr[mid]) lo = mid + 1;
    else hi = mid;
  } while (lo < hi);
  return false;
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch(arr, 6));
