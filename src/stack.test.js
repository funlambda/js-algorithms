describe('Stack', () => {
  const s = require('./stack');
  var stack: Stack<number>;

  test('Create', () => {
    stack = s.Create();
    expect(s.Pop(stack)).toBe(null);
  });

  test('Push', () => {
    s.Push(stack, 6);
    s.Push(stack, 20);
    s.Push(stack, 11);
  });

  test('Pop', () => {
    expect(s.Pop(stack)).toBe(11);
    expect(s.Pop(stack)).toBe(20);
    expect(s.Pop(stack)).toBe(6);
    expect(s.Pop(stack)).toBe(null);
  });
});
