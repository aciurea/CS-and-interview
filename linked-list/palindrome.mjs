// Check if a list is a palindrom
// LinkedList: {value: 123, next: null}

import { isPalindrome } from "../utils/isPalindrome.mjs";
import { LinkedList } from "./linkedList.mjs";
import { reverseList } from "./reverseList.mjs";

function isPalindromeList(list) {
    if(list == null || list.next === null)
        return true;
    let value = '';
    let node = list;

    while(node !== null) {
        value += node.value;
        node = node.next;
    }

    return isPalindrome(value);
}

function isPalindromeList2(list) {
    let list2 = reverseList(list);

    while(list !== null) {
        if(list.value === list2.value) { 
            list = list.next;
            list2 = list2.next;
            continue;
        }
        else return false;
    }

    return true;
}

function test() {
    const list = new LinkedList('c');
    list.insert('o');
    list.insert('j');
    list.insert('o');
    list.insert('c');

    console.log(isPalindromeList2(list.getList()));
}

test();