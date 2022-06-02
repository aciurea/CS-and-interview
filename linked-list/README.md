# Linked List

- organizes items sequentially, with each item storing a pointer to the next
- Data in a linked list is not stored in a contiguous memory location
- Single Linked lists have one direction
- Double Linked lists have back and forth direction
- A linked lists has a
  - head
  - next pointer to the next node
  - tail

## Advantages

- No need to specify the size at compile time
- It is a dynamic data structure
- Insertion is O(1)
- Deletion can be O(1) if you have the reference to the node or O(n)

## Disadvantages

- We cannot access the data in a random manner. We need to traverse the whole list to access the last element.
- Extra memory is needed to implement the linked list. Pointer will take linear space.

## Runner technique

- The runner techniquer is used in many linked lists problems.
- Iteration through the list is made with 2 pointers simultaneously, with one ahead of the other (slow and fast).
- The fast pointer might be ahead by a fixed amount
- E.g For a linked list: a1, a2, ... an -> b1, b2, ... bn and to rearange it to a1, b1, a2, b2, ...an, bn
- there can be one pointer p1 move every 2 elements for every p2 (slow node) makes.
- When p1 hits the end, p2 is in the middle, then p1 can be moved to the front of the list and begin aranging the elements.

- All the recursive alghoritms take at least O (n) space (n is the depth of the recursive call) and can be solved iteratively,
  although they may be much more complex.
