class DoubleLinkedList {
  #head = {};
  #tail = {};

  constructor(value) {
    this.#head = { value, next: null, prev: null };
    this.#tail = this.#head;
    this.#tail.prev = this.#head;
  }

  insert(value) {
    const node = { value, next: null, prev: this.#tail };

    this.#tail.next = node;
    this.#tail = node;
  }

  remove(value) {
    // if header

    if (this.#head.value === value) {
      this.#head = this.#head.next ?? {};
      return true;
    }

    let node = this.#head.next;
    let prevNode = this.#head;

    while (node) {
      if (node.value === value) {
        node.prev = prevNode;
        prevNode.next = node.next;

        // if tail
        if (this.#tail === node) {
          this.#tail = prevNode;
        }

        return true;
      }

      prevNode = node;
      node = node.next;
    }

    return false;
  }
  print() {
    let node = this.#head.next;
    let string = `{ value: ${node.prev.value}, prev: [null], next: `;

    while (node) {
      string += `{ value: ${node.value} prev: [${node.prev.value}], next: `;
      node = node.next;

      if (node === null) {
        string += `null }`;
      }
    }

    // do it recursively to close the brackets
    console.log(string + ' }');
  }

  #innerPrint(node) {
    if (node) {
      const string = `{ value: ${node.value}, prev: [${
        node.next?.value ?? null
      }], next: ${this.#innerPrint(node.next)}}`;

      return string;
    }

    return null;
  }
}

const dblLinedList = new DoubleLinkedList(1);

dblLinedList.insert(2);
// dblLinedList.remove(2);
dblLinedList.print();
