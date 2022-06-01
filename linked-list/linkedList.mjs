// @ts-check

const log = console.log.bind(this);
export class LinkedList {
  #head = {};
  #tail = {};

  constructor(value) {
    this.#head = { value, next: null };
    this.#tail = this.#head;
  }

  insert(value) {
    const node = { value, next: null };
    this.#tail.next = node;
    this.#tail = node;
  }

  insertBeforeHead(value) {
    const node = { value, next: null };
    node.next = this.#head;
    this.#head = node;
  }

  insertAfterNodeValue(nodeValue, value) {
    const node = { value, next: null };

    const foundNode = this.find(nodeValue);

    if (foundNode) {
      const nextNode = foundNode.next;
      foundNode.next = node;
      node.next = nextNode;

      return true;
    }

    return false;
  }

  contains(value) {
    let list = this.#head;
    while (list.next) {
      if (list.value === value) {
        return true;
      }
      list = list.next;
    }

    return this.#tail.value === value;
  }

  find(value) {
    let node = this.#head;
    while (node) {
      if (node.value === value) {
        return node;
      }

      node = node.next;
    }

    return null;
  }

  remove(value) {
    // if it's the head fix it fast.
    if (this.#head.value === value) {
      this.#head = this.#head.next ?? {};
      return true;
    }

    let node = this.#head.next;
    let prevNode = this.#head;
    while (node) {
      if (node.value === value) {
        prevNode.next = node.next;

        // if is the #tail, update the #tail
        if (node === this.#tail) {
          this.#tail = prevNode;
        }
        return true;
      }

      prevNode = node;
      node = node.next;
    }

    return false;
  }

  getList() {
    return this.#head;
  }

  print() {
    log(JSON.stringify(this.#head, null, 3));
  }

  isHead(value) {
    return this.#head.value === value;
  }

  isTail(value) {
    return this.#tail.value === value;
  }
}

// const list = new LinkedList(1);

// list.insert(2);
// list.insert(3);
// list.insert(4);

// list.insertBeforeHead(9);
// list.insertBeforeHead(10);

// list.insertAfterNodeValue(10, 999);
// list.print();
// log(list.find(132));
