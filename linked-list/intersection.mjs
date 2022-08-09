// check if to list intersects each other
// the equality is done by reference not by value;
// return the node;

function isIntersection(listA, listB) {
    while (listA.next !== null) {
        let node = listB;
        while (node.next !== null) {
            if (listA === node) return node;
            else node = node.next;

        }
        listA = listA.next;
    }

    return null;
}

const sameList = { value: 777, next: null };
const node = { value: 'common', next: sameList };
const listA = { value: 1, next: { value: 2, next: node } };
const listB = { value: 7, next: { value: 11, next: { value: 10, next: node } } };

function test() {
    // console.log(JSON.stringify(listA, null, 2));
    // console.log(JSON.stringify(listB, null, 2));
    console.log(isIntersection(listA, listB));
}

test();

