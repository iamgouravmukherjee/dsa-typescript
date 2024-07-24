import SingleLinkedList from "./init";

const list = new SingleLinkedList();

// Before appending
list.traverse();

// Append to the list
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

// After appeding
list.traverse();
