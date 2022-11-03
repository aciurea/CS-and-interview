export class Stack {
    #head = null;

    peek() {
        if (this.#head !== null)
            return this.#head.value;
        return null
    }

    isEmpty() {
        return this.#head == null;
    }

    push(value) {
        const oldHead = this.#head;
        this.#head = { value, next: oldHead };
    }

    pop() {
        if (this.#head !== null) {
            const value = this.#head.value;
            this.#head = this.#head.next;
            return value;
        }
    }
}


const stack = new Stack();

stack.push(7)
stack.push(6)
stack.push(3)
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());