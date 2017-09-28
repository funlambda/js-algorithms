// @flow

export type Cell<T> = { val: T, next: Cell<T> | null };
export type LinkedList<T> = { top: Cell<T> | null };

// Create empty linked list
export function Create<T>(): LinkedList<T> {
  return { top: null }
}

// Add items to end of list -- O(N)
export function AddEnd<T>(list: LinkedList<T>, val: T): void {
  var newCell = { val: val, next: null };

  if (list.top == null){
    list.top = newCell;
    return;
  }

  var cell = list.top;
  while (cell.next != null){
    cell = cell.next;
  }

  cell.next = newCell;
}

// Add items to beginning of list -- O(1)
export function AddBeginning<T>(list: LinkedList<T>, val: T): void {
  var newCell = { val: val, next: list.top };
  list.top = newCell;
}

// Iterate over list -- O(N)
export function Iterate<T>(list: LinkedList<T>, f: T => T): void {
  var cell = list.top;
  while (cell != null){
    f(cell.val);
    cell = cell.next;
  }
}

// Find first cell satisfying criteria
export function FindCell<T>(list: LinkedList<T>, f: T => bool): Cell<T> | null {
  let cell = list.top;
  while (cell != null){
    if (f(cell.val)) return cell;
    cell = cell.next;
  }
  return null;
}

// Remove items from list
export function RemoveIndex<T>(list: LinkedList<T>, i: number): void {
  // no way to remove from an empty list
  if (list.top == null)
    return;

  if (i == 0) {
    list.top = list.top.next;
    return;
  }

  // iterate until right before ith cell
  let a = 0;
  let cell = list.top;
  while (a < i - 1) {
    if (cell == null) return; // list end reached before index
    a++;
  }

  if (cell.next == null) return;

  cell.next = cell.next.next;
}

// Remove value from list
export function RemoveValue<T>(list: LinkedList<T>, value: T): void {
  // find cell with requested value
  let a = 0;

  let prevCell = null;
  let cell = list.top;
  while (cell != null) {
    if (cell.val == value) {
      if (prevCell == null){
        list.top = cell.next;
      } else {
        prevCell.next = cell.next;
      }
      return;
    }

    prevCell = cell;
    cell = cell.next;
  }
}

// Convert list to array -- O(N)
export function ToArray<T>(list: LinkedList<T>): Array<T> {
  var arr = [];
  var cell = list.top;

  while (cell != null) {
    arr.push(cell.val);
    cell = cell.next;
  }

  return arr;
}
