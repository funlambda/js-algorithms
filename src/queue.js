// @flow

import { type DoubleLinkedList } from './double-linked-list';
const dll = require('./double-linked-list');

export type Queue<T> = DoubleLinkedList<T>

export function Create<T>(): Queue<T> {
  return { pointers: null };
}

export function Enqueue<T>(queue: Queue<T>, value: T): void {
  dll.AddEnd(queue, value);
}

export function Dequeue<T>(queue: Queue<T>): T | null {
  if (queue.pointers == null) return null;

  const cell = queue.pointers.top;
  dll.RemoveIndex(queue, 0);

  return cell.val;
}
