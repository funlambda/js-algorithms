// @flow

import { type LinkedList } from './linked-list';

export type Stack<T> = LinkedList<T>

export function Create<T>(): Stack<T> {
  return { top: null };
}

export function Push<T>(stack: Stack<T>, value: T): void {
  stack.top = { val: value, next: stack.top };
}

export function Pop<T>(stack: Stack<T>): T | null {
  if (stack.top == null) return null;
  const value = stack.top.val;
  stack.top = stack.top.next;
  return value;
}
