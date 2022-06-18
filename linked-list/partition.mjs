// Write a function to partition the nodes with value less than x to the left and the values >= than x to the right

import { LinkedList } from './linkedList.mjs';

function partition(head, value) {
  if (head == null) return null;
  let rightHead = null;
  let leftHead = null;
  let rightTail = null;
  let leftTail = null;

  while (head != null) {
    const node = { value: head.value, next: null };

    if (head.value < value) {
      if (leftHead == null) leftTail = leftHead = node;
      else {
        leftTail.next = node;
        leftTail = node;
      }
    } else {
      if (rightHead == null) rightTail = rightHead = node;
      else {
        rightTail.next = node;
        rightTail = node;
      }
    }

    head = head.next;
  }

  leftTail.next = rightHead;
  return leftHead;
}

const list = new LinkedList(1);

list.insert(12);
list.insert(2);
list.insert(9);
list.insert(3);
list.insert(4);
list.insert(10);
list.insert(5);

// console.log(JSON.stringify(partition(list.getList(), 5), null, 3));

function partition2(head, value) {
  if (head == null) return null;
  const leftList = new LinkedList();
  const rightList = new LinkedList();

  while (head != null) {
    if (head.value < value) leftList.insert(head.value);
    else rightList.insert(head.value);

    head = head.next;
  }

  return leftList.insertAnotherList(rightList.getList()).getList();
}

console.log(JSON.stringify(partition2(list.getList(), 5), null, 3));

function partition3(head, value) {
  if (head == null) return null;
  const list = new LinkedList(head.value);
  head = head.next;

  while (head != null) {
    if (head.value < value) list.insertBeforeHead(head.value);
    else list.insert(head.value);

    head = head.next;
  }

  return list.getList();
}

console.log(JSON.stringify(partition3(list.getList(), 5), null, 3));

function partition4(head, value) {
  if (head == null) return null;
  let newHead = null;
  let tail = null;

  while (head != null) {
    const node = { value: head.value, next: null };
    head = head.next;
    if (newHead == null) newHead = tail = node;

    if (node.value < value) {
      node.next = newHead;
      newHead = node;
    } else {
      tail.next = node;
      tail = node;
    }
  }

  return newHead;
}
console.log(JSON.stringify(partition4(list.getList(), 5), null, 3));

// 1 -> 12-> 2 -> 9 -> 3 -> 4 -> 10 -> 5
// head = 1; tail = 1;
// head = 1; tail = 1 -> 12
// head = 2 -> 1 -> 12; tail = 2 -> 1 -> 12
// head = 2 -> 1 -> 12; tail = 2 -> 1 -> 12 -> 9
// head =
