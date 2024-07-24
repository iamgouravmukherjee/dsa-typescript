import SingleLinkedList from "./init";

const list = new SingleLinkedList();

// Before appending
list.traverse();

// Append to the list
console.log("Appending to the list");
list.append(3);
list.append(4);
list.append(5);

// After appeding
list.traverse();

// Prepending to the list
console.log("Prepending to the list");
list.prepend(2);
list.prepend(1);

// After prepending
list.traverse();

// Reverse the list
console.log("Reversing the list");
list.reverse();

list.traverse();

// Reverse again, should become original
console.log("Reversing the list");
list.reverse();

list.traverse();
