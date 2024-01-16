# CS-and-interview

Computer Science notes plus algorithms problems and solutions

## Types of data structures

- Array
- Linked lists
- Hash Table
- Queues

# Binary search (arrays sorted only) 

[Example](./binary-search.js)
- We split the array in 2 at the middle of the array
- We check Whether the value we search for is in the middle. If it is, than we return. DONE
- We check if the value is greater than middle. If yes we have to update the `lo`` value, which will became middle + 1
- If value is not greater than middle it means that is lower so we have to update the `hi` value. `hi` will be equal with middle value.
- We repeat this until `lo` is lower than `hi`

```
mid = Math.floor(lo + (hi- lo) / 2)
if(value === arr[mid]) return true;
if(value > arr[mid]) lo = mid + 1; // lower is inclusive (we take it in consideration)
else hi = mid; // hi is exclusive (We have to take it out)
// repeat untill lo is greater or equal with high and return false in this case.
```
<details>
<summary style='font-size:15px;font-weight:600'>Code</summary>

```
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
binaraySearch(arr, 3); // true

```
</details>


# 2 crystal balls [Example](./2-crystal.balls.js)
- We only have 2 tries so we have to be smart on how we can find the position where it breaks
- We can increase the iteration with `sqrt(arr.length)` (general best practice)
- Once we find the threshold we move back one threshold and search again `sqrt(arr.length)`

### The Access time is O(sqrt(N)):
- we iterate `sqrt(N)`` to find the first threshold where it breaks (first ball)
- we iterate sqrt(N) times to find the right position (second ball)

E.g `arr.length = 100`. All the items have to be sorted. Value where it breaks 55
- We first iterate with sqrt(arr.length) = 10
- Steps: `[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]`
- We find that the step where it breaks is 60
- We move back to 50 and iterate sqrt(arr.length) = 10, so basically we iterate from 50 to 60
- We find the value 55.

<details>
<summary style='font-size:15px;font-weight:600'>Code</summary>

```

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

console.log(findPosition(arr, 101)); // -1

```
</details>



