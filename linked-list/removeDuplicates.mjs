// @ts-check
import { LinkedList } from './linkedList.mjs';

// Remove duplicate nodes with buffer.

// const removeDuplicates = (list) => {
//   let node = list;
//   let prevNode = list;
//   const buff = {};

//   while (node.next !== null) {
//     if (buff[node.value]) prevNode.next = node.next; // delete the current node
//     else {
//       buff[node.value] = true;
//       prevNode = node;
//     }

//     node = node.next;
//   }

//   if (buff[prevNode.next?.value]) {
//     prevNode.next = null;
//   }

//   return list;
// };
const removeDuplicates = (list) => {
  let prevNode = null;
  const buff = {};

  while (list.next !== null) {
    if (buff[list.value]) prevNode.next = list.next; // delete the current node
    else {
      buff[list.value] = true;
      prevNode = list;
    }

    list = list.next;
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
// removeDuplicates(linkedList.getList());

const removeDuplicatesNoBuffer = (list) => {
  let currentNode = list;

  while (currentNode.next != null) {
    let nextNode = currentNode.next;

    while (nextNode?.next != null) {
      if (currentNode.value === nextNode.value) {
        nextNode.value = nextNode.next.value;
        nextNode.next = nextNode.next.next;
      } else nextNode = nextNode.next;
    }
    if (currentNode.value === currentNode.next.value)
      currentNode.next = currentNode.next.next;
    else currentNode = currentNode.next;
  }

  return list;
};

removeDuplicatesNoBuffer(linkedList.getList());
linkedList.print();
