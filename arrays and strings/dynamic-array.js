class DynamicArray {
  constructor(size = 2) {
    this.arr = new Array(size).fill(null);
    this.size = 0;
  }

  pushBack(value) {
    if (this.size < this.arr.length) {
      this.arr[this.size] = value;
      this.size += 1;
    } else {
      const tempArr = new Array(this.arr.length * 2).fill(null);

      for (let i = 0; i < this.arr.length; i++) {
        tempArr[i] = this.arr[i];
      }

      this.arr = [...tempArr];
      this.arr[this.size] = value;
      this.size += 1;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.size)
      throw new Error('Index Out of boundery');

    this.arr = this.arr.filter((_, i) => i !== index);
    this.size -= 1;

    // reduce the space if the size is less than length / 2

    if (this.size >= 0 && this.size < this.arr.length / 2) {
      const tempArr = [];
      for (let i = 0; i < this.arr.length / 2; i++) {
        tempArr[i] = this.arr[i];
      }
      this.arr = [...tempArr];
    }
  }

  get(index) {
    return this.arr[index];
  }

  print() {
    console.log(this.arr);
  }
}

const arr = new DynamicArray(2);

arr.pushBack(1);
arr.pushBack(2);
arr.pushBack(3);
arr.pushBack(4);
arr.pushBack(5);
arr.pushBack(6);
arr.pushBack(7);
arr.pushBack(8);
arr.pushBack(9);
arr.pushBack(10);

arr.remove(5);
arr.remove(5);
arr.remove(5);
arr.remove(5);
arr.pushBack(6);
arr.pushBack(7);
arr.pushBack(8);
arr.pushBack(8);
arr.pushBack(9);
arr.pushBack(10);
arr.pushBack(10);
arr.print();

console.log(arr.get(6));
