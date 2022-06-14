// @ts-check
/**
 * Find K to last Element in a single linked list
 * For k = 1 will return the last element, for k = 2 will return the second to last element and so on.
 */

import { LinkedList } from './linkedList.mjs';

function findKtoLastElement(list, k) {
  if (k === 0) return null;
  let index = 0;
  let node = list;

  while (node.next !== null) {
    node = node.next;
    index += 1;
  }

  index = index - k;

  if (index <= 0) return list;
  node = list;

  while (index >= 0) {
    index--;
    node = node.next;
  }

  return node;
}

const linkedList = new LinkedList(1);

linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(4);
linkedList.insert(5);

console.log(findKtoLastElement(linkedList.getList(), 1));

function findKtoLastElementRec(head, k) {
  if (k === 0) return null;
  const counter = [0];

  function findLast(head, k, counter) {
    if (head == null) return head;

    const elem = findLast(head.next, k, counter);
    counter[0] += 1;

    if (k === counter[0]) return head;

    return elem;
  }

  return findLast(head, k, counter);
}

console.log(findKtoLastElementRec(linkedList.getList(), 3));

function runner(head, k) {
  let p1 = head;
  let p2 = head;

  for (let i = 0; i < k; i++) {
    if (p1 == null) return null;
    p1 = p1.next;
  }

  while (p1 != null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p2;
}

console.log(runner(linkedList.getList(), 3));

// 2 -> 3 -> 4 -> 5
// k = 1;
// p1 = 2
// p2 = 2

/**
 * Loop
 * i = 0; p1 = 3;
 * i = 1; 1 < 1 false, therefore p1 = 3;

Loop again on linked list

p1 != null

p1 = 4
p2 = 3

p1 5
p2 = 4
 p1 has to go until it reaches null.

*/
