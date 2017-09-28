// @flow

export type Cell<T> = { val: T, next: Cell<T> | null, prev: Cell<T> | null };
export type DoubleLinkedList<T> = { pointers: { top: Cell<T>, bottom: Cell<T> } | null };

// Create empty double linked list
export function Create<T>(): DoubleLinkedList<T> {
  return { pointers: null };
}

// Add item to end of list -- O(1)
export function AddEnd<T>(list: DoubleLinkedList<T>, val: T): void {
  var newCell = {
    val: val,
    prev: list.pointers ? list.pointers.bottom : null,
    next: null
  };

  if (list.pointers == null){
    list.pointers = { top: newCell, bottom: newCell };
    return;
  }

  list.pointers.bottom.next = newCell;
  list.pointers.bottom = newCell;
}

// Add item to beginning of list -- O(1)
export function AddBeginning<T>(list: DoubleLinkedList<T>, val: T): void {
  var newCell = {
    val: val,
    prev: null,
    next: list.pointers ? list.pointers.top : null
  };

  if (list.pointers == null){
    list.pointers = { top: newCell, bottom: newCell };
    return;
  }

  list.pointers.top.prev = newCell;
  list.pointers.top = newCell;
}

// Iterate over list -- O(N)
export function Iterate<T>(list: DoubleLinkedList<T>, f: T => T): void {
  var cell = list.pointers ? list.pointers.top : null;
  while (cell != null){
    f(cell.val);
    cell = cell.next;
  }
}

// Find first cell satisfying criteria -- O(N)
export function FindCell<T>(list: DoubleLinkedList<T>, f: T => bool): Cell<T> | null {
  var cell = list.pointers ? list.pointers.top : null;
  while (cell != null){
    if (f(cell.val)) return cell;
    cell = cell.next;
  }
  return null;
}

// Remove items from list
export function RemoveIndex<T>(list: DoubleLinkedList<T>, i: number): void {
  // no way to remove from an empty list
  if (list.pointers == null)
    return;

  if (i == 0) {
    if (list.pointers.top.next) {
      list.pointers.top.next.prev = null;
      list.pointers.top = list.pointers.top.next;
    } else{
      list.pointers = null;
    }
    return;
  }

  // iterate until right before ith cell
  let a = 0;
  let cell = list.pointers.top;
  while (a < i - 1) {
    if (cell == null) return; // list end reached before index
    a++;
  }

  if (cell.next == null) return;

  cell.next = cell.next.next;
}

// Convert list to array -- O(N)
export function ToArray<T>(list: DoubleLinkedList<T>): Array<T> {
  var arr = [];
  var cell = list.pointers ? list.pointers.top : null;

  while (cell != null) {
    arr.push(cell.val);
    cell = cell.next;
  }

  return arr;
}
