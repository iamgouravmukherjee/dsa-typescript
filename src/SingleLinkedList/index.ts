import SingleLinkedList from "./init";

const list = new SingleLinkedList();

// Before appending
list.traverse();


console.log("Appending to the list");
// Append to the list
list.append(3);
list.append(4);
list.append(5);

// After appeding
list.traverse();

console.log("Prepending to the list");
// Prepending to the list
list.prepend(2);
list.prepend(1);

// After prepending
list.traverse();
