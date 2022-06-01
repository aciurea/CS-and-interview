## Array

- Contigous area of memory consisting of equal-size elements inidexed by contigous intergers
- Constant-time acess to read and write
- Row-major indexing is like a matrix where column is modifying mostly
- Column-major where row is modifying mostly

### Add

- End -> O(1)
- Beginning -> O(n)
- Middle -> O(n)

### Remove

- End -> O(1)
- Beginning -> O(n)
- Middle -> O(n)

- Array have a length property which is the length of the array
- In JavaScript you can assign to length in Java you cannot assign to the length

### Sieve of Erotosthenes for finding prime numbers

### Multi-dimensional array

- an array of references to arrays

- Pascal's Triangle -> check https://archive.org/details/ucberkeley_webcast_Wp8oiO_CZZE

## Dynamic arrays

- Solution: store a pointer to a dynamically allocatd array and replace it with a newly-allocated array as needed
- It is also called resizeable array
- Inserting: If the size of the array is excedeed, double the size and replace the array O(n) worst case scenario
- Pushing: If the size of the array is half occupied, shrink to half the size
- Get should be O(1)
