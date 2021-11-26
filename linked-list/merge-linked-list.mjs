import { LinkedList } from './linked-list.mjs';

const list1 = new LinkedList(1);
list1.insert(2);
list1.insert(3);
list1.insert(4);

const list2 = new LinkedList(5);
list2.insert(6);
list2.insert(7);

// list1.tail.next = list2.head;
// list1.tail = list2.tail;

// in case is needed to merge list2 in front of list1
// list2.tail.next = list1.head;
// list2.tail = list1.tail;

// head and tail are not exposed
