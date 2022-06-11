// @ts-check
/**
 * Find K to last Element in a single linked list
 *
 */

import { LinkedList } from './linkedList.mjs';

function findKtoLastElement(list, k) {
  let index = 0;
  let node = list;

  while (node.next !== null) {
    node = node.next;
    index += 1;
  }

  index = index - k;
  if (index <= 0) return list;
  node = list;

  while (index > 0) {
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

console.log(findKtoLastElement(linkedList.getList(), 2));
