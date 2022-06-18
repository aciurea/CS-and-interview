import { LinkedList } from './linkedList.mjs';
// @ts-check
// Reverse a linked list

function reverseList(list) {
  let head = null;

  while (list !== null) {
    const tempNode = { value: list.value, next: head };
    head = tempNode;
    list = list.next;
  }

  return head;
}

const list = new LinkedList(1);

list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);

// [1]->[2]->[3]->[4]->[5]
console.log(JSON.stringify(reverseList(list.getList()), null, 3));
