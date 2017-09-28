describe('Linked List', () => {
  const ll = require('./linked-list');
  const list = ll.Create();

  test('Can add', () => {
    ll.AddEnd(list, 'b');
    ll.AddEnd(list, 'c');
    ll.AddBeginning(list, 'a');
    const arr = ll.ToArray(list);
    expect(arr).toEqual([ 'a', 'b', 'c' ]);
  });

  test('Can find', () => {
    let cell = ll.FindCell(list, s => s == 'c');
    expect(cell.val).toBe('c');
    expect(cell.next).toBe(null);
  });

  test('Can remove index 1', () => {
    ll.RemoveIndex(list, 1);
    const arr = ll.ToArray(list);
    expect(arr).toEqual([ 'a', 'c' ]);
  });

  test('Can remove index 0', () => {
    ll.RemoveIndex(list, 0);
    const arr = ll.ToArray(list);
    expect(arr).toEqual([ 'c' ]);
  });
});
