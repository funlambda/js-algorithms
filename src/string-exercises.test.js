describe('String Problems', () => {
  const s = require('./string-exercises');

  test('isPalindrome', () => {
    expect(s.isPalindrome('abba')).toBe(true);
    expect(s.isPalindrome('aba')).toBe(true);
    expect(s.isPalindrome('racecar')).toBe(true);
    expect(s.isPalindrome('raccar')).toBe(true);

    expect(s.isPalindrome('raccas')).toBe(false);
    expect(s.isPalindrome('blue')).toBe(false);
    expect(s.isPalindrome('car')).toBe(false);
    expect(s.isPalindrome('')).toBe(true);
  });

  test('reverse', () => {
    expect(s.reverse('bag')).toBe('gab');
    expect(s.reverse('test')).toBe('tset');
    expect(s.reverse('')).toBe('');
  });

  // test('containsSubstring', () => {
  //   expect(s.containsSubstring('do this test', 'this')).toBe(true);
  //   expect(s.containsSubstring('do this test', 'this test')).toBe(true);
  //   expect(s.containsSubstring('do this test', 'athis test')).toBe(false);
  // });

  test('batchReverse', () => {
    expect(s.batchReverse('bag',1)).toBe('bag');
    expect(s.batchReverse('test',1)).toBe('test');
    expect(s.batchReverse('computer',2)).toBe('ocpmture');
    expect(s.batchReverse('computer',3)).toBe('moctupre');
    expect(s.batchReverse('bag',3)).toBe('gab');
    expect(s.batchReverse('baga',3)).toBe('gaba');
  });

  test('isAnagram', () => {
    expect(s.isAnagram('iceman','cinema')).toBe(true);
    expect(s.isAnagram('iceman','cinemas')).toBe(false);
    expect(s.isAnagram('icemans','cinema')).toBe(false);
    expect(s.isAnagram('icemans','cinemas')).toBe(true);
    expect(s.isAnagram('bag','gab')).toBe(true);
    expect(s.isAnagram('cag','gab')).toBe(false);
  });

  test('findPermutations', () => {
    expect(s.findPermutations('dog')).toEqual([ 'dog', 'dgo', 'odg', 'ogd', 'gdo', 'god' ]);
    expect(s.findPermutations('dod')).toEqual([ 'dod', 'ddo', 'odd' ]);
  });
});
