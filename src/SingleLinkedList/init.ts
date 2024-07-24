class ListNode<V> {
  public value: V;
  public next: ListNode<V> | null = null;
  constructor(val: V) {
    this.value = val;
    this.next = null;
  }
}

export default class SingleLinkedList<L> {
  private head: ListNode<L> | null = null;

  traverse(): void {
    let current: ListNode<L> | null = this.head;
    while (current) {
      console.log(`${current.value} -> `);
      current = current.next;
    }
  }

  append(value: L): void {
    const node = new ListNode(value);
    if (this.head === null) {
      this.head = node;
      return;
    }
    let current: ListNode<L> = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
}
