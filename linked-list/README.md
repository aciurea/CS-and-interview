# Linked List

- organizes items sequentially, with each item storing a pointer to the next
- Data in a linked list is not stored ina contiguous memory location
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
