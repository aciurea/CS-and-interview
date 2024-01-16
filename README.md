# CS-and-interview

Computer Science notes plus algorithms problems and solutions

## Types of data structures

- Array
- Linked lists
- Hash Table
- Queues


# 2 crystal balls
- We only have 2 tries so we have to be smart on how we can find the position where it breaks
- We can increase the iteration with `sqrt(arr.length)` (general best practice)
- Once we find the threshold we move back one threshold and search again `sqrt(arr.length)`

### The Access time is O(sqrt(N)):
- we iterate `sqrt(N)`` to find the first threshold where it breaks (first ball)
- we iterate sqrt(N) times to find the right position (second ball)

E.g `arr.length = 100`. All the items have to be sorted. Value where it breaks 55
- We first iterate with sqrt(arr.length) = 10
- Steps: `[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]`
- We find that the step where it breaks is 60
- We move back to 50 and iterate sqrt(arr.length) = 10, so basically we iterate from 50 to 60
- We find the value 55.


