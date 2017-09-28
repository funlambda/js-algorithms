// @flow

import { type LinkedList } from './linked-list';
const ll = require('./linked-list');

export type HashTable<T> = { buckets: Array<LinkedList<T>> }

module.exports = <T>(config: { hashFunction: T => number, size: number }) => ({
  // Create empty hash table
  Create: (): HashTable<T> => {
    const arr = [];
    arr.length = config.size;

    for (let i = 0; i < arr.length; i++)
      arr[i] = ll.Create();

    return { buckets: arr };
  },

  // Add value to hash table
  Insert: (hashTable: HashTable<T>, val: T): void => {
    const index = config.hashFunction(val);
    const list = hashTable.buckets[index];
    ll.AddEnd(list, val);
  },

  // Check to see if value is in hash table
  Contains: (hashTable: HashTable<T>, val: T): bool => {
    const index = config.hashFunction(val);
    const list = hashTable.buckets[index];
    const cell = ll.FindCell(list, v => v == val);
    return cell != null;
  },

  // Remove value from hash table
  Remove: (hashTable: HashTable<T>, val: T): void => {
    const index = config.hashFunction(val);
    const list = hashTable.buckets[index];
    ll.RemoveValue(list, val);
  },
  ToPrintable: (hashTable: HashTable<T>): Array<Array<T>> => {
    return hashTable.buckets.map(b => ll.ToArray(b));
  }
});
