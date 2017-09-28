type Person = { first: string, last: string };

const bob = { first: 'Bob', last: 'Meuller' };
const rick = { first: 'Rick', last: 'Steves' };
const mike = { first: 'Mike', last: 'Pence' };

describe('Queue', () => {
  const q = require('./queue');
  var queue: Queue<Person>;

  test('Create', () => {
    queue = q.Create();
    expect(q.Dequeue(queue)).toBe(null);
  });

  test('Enqueue', () => {
    q.Enqueue(queue, bob);
    q.Enqueue(queue, rick);
    q.Enqueue(queue, mike);
  });

  test('Dequeue', () => {
    expect(q.Dequeue(queue)).toBe(bob);
    expect(q.Dequeue(queue)).toBe(rick);
    expect(q.Dequeue(queue)).toBe(mike);
    expect(q.Dequeue(queue)).toBe(null);
  });
});
