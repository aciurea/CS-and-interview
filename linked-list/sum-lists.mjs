import { LinkedList } from './linkedList.mjs';
import { reverseList } from './reverseList.mjs';

/**
 * Sum 2 lists
 * each digit represents a node
 * digits are stored in reverse order
 * NOT ALLOWED to convert the list into an integer
 * (6 -> 1 -> 2) + (7 -> 1 -> 6) => 216 + 617 = 833
 * Res will be 3 -> 3 -> 8
 *
 * Problem 2: the list digits are in the right order
 * (6 -> 1 -> 2) + (7 -> 1 -> 6) => 612 + 716 = 1328
 * Res will be 1 -> 3 -> 2 -> 8
 */

// suppose listA and ListB will be the same in length
function sumLists(listA, listB) {
  let carry = 0;
  let resList = null;
  let resListTail = null;

  while (listA != null) {
    let value = listA.value + listB.value + carry;
    [carry, value] = value > 10 ? [getCarry(value), value % 10] : [0, value];

    if (resList === null) resListTail = resList = { value, next: null };
    else resListTail = resListTail.next = { value, next: null };

    listA = listA.next;
    listB = listB.next;
  }

  if (carry > 0) resListTail.next = { value: carry, next: null };

  return resList;
}

function getCarry(value) {
  return Math.floor(value / 10);
}

const listA = new LinkedList();
listA.insert(6);
listA.insert(1);
listA.insert(2);

const listB = new LinkedList();

listB.insert(7);
listB.insert(1);
listB.insert(6);

const res = sumLists(listA.getList(), listB.getList());

console.log(JSON.stringify(res, null, 3));

const correctOrderRes = sumLists(
  reverseList(listA.getList()),
  reverseList(listB.getList())
);

console.log(JSON.stringify(reverseList(correctOrderRes), null, 3));
