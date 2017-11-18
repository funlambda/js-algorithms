describe('Hash Table', () => {
  const ht = require('./hash-table')({
    size: 100,
    hashFunction: (n: number) => n % 100
  });

  var hashTable: HashTable<number>;

  test('Create', () => {
    hashTable = ht.Create();
  });

  test('Insert', () => {
    ht.Insert(hashTable, 43);
    ht.Insert(hashTable, 14);
    ht.Insert(hashTable, 35);
    ht.Insert(hashTable, 135);
    ht.Insert(hashTable, 743);
  });

  test('Contains', () => {
    expect(ht.Contains(hashTable, 43)).toEqual(true);
    expect(ht.Contains(hashTable, 14)).toEqual(true);
    expect(ht.Contains(hashTable, 35)).toEqual(true);
    expect(ht.Contains(hashTable, 135)).toEqual(true);
    expect(ht.Contains(hashTable, 743)).toEqual(true);
    expect(ht.Contains(hashTable, 12)).toEqual(false);
  });

  // test('Print', () => {
  //   const x = ht.ToPrintable(hashTable);
  //   console.log(x);
  // });
  test('Remove', () => {
    ht.Remove(hashTable, 14);
    expect(ht.Contains(hashTable, 14)).toEqual(false);
    ht.Remove(hashTable, 14);
    expect(ht.Contains(hashTable, 14)).toEqual(false);
    ht.Remove(hashTable, 743);
    expect(ht.Contains(hashTable, 743)).toEqual(false);
    expect(ht.Contains(hashTable, 43)).toEqual(true);
    ht.Remove(hashTable, 43);
    expect(ht.Contains(hashTable, 43)).toEqual(false);
    ht.Insert(hashTable, 543);
    expect(ht.Contains(hashTable, 543)).toEqual(true);
  });
});
