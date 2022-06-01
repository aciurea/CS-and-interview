// @ts-check
import { LinkedList } from './linkedList.mjs';

// Remove duplicate nodes with buffer.

const removeDuplicates = (list) => {
  let node = list;
  let prevNode = list;
  const buff = {};

  while (node.next !== null) {
    if (buff[node.value]) prevNode.next = node.next; // delete the current node
    else {
      buff[node.value] = true;
      prevNode = node;
    }

    node = node.next;
  }

  if (buff[prevNode.next?.value]) {
    prevNode.next = null;
  }

  return list;
};

const linkedList = new LinkedList(1);
linkedList.insert(1);
linkedList.insert(1);
linkedList.insert(1);
linkedList.insert(1);

linkedList.print();
removeDuplicates(linkedList.getList());
linkedList.print();
