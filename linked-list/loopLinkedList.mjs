import { LinkedList } from "./linkedList.mjs";

/**
 * Loop inside linked list
 * Having a linked list, check and return the collision node. 
 * If no collision node, return null
 */


/**SOLUTION
 * Start with 2 pointers, the fast pointer twice as fast
 * K steps -> num of steps before the loop
 * P steps -> num of steps inside the loop
 * When slow node gets to the loop, fast node will be K steps in front
 * The node will meet at P - K steps inside the loop
 */
function loop(list) {
    const head = list;
    let slow = list
    let fast = list;
    // We try to find the collision node which can be
    while(slow != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;

     

        if(slow == fast) {
            // We traversed K steps before the loop
            // The collision must be P nodes(numar of node in the loop) - K nodes before the loop
            break;
        }
    }

    if(slow == null || fast.next == null) return null

    // n1 must go at the beggining of the loop
    // move the n1 and n2 at the same speed

    slow = head
    while(slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}


function test() {
    const list = new LinkedList('a');
    list.insert('b');
    list.insert('d');
    list.insert('dd');
    list.insert('c');
    list.insert('e');
    list.insert('f');
    list.insert('g');
    list.insert('h');
    list.insert('j');
    list.insert('h');
    list.insert('k');
    const node = list.getNodeByValue('c')

    list.insertNode(node)

    const loopNode = loop(list.getList())

    console.log(loopNode === node)
}

test();