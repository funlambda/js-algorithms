// Check if string is palindrome or not

export function isPalindrome(str){
  for (var i = 0; i < str.length / 2; i++){
    if (str[i] != str[str.length - i - 1])
      return false;
  }

  return true;
}

// Reverse a string

export function reverse1(str){
  var retValue = "";
  for (var i = 0; i < str.length; i++){
    retValue += str[str.length - i - 1];
  }

  return retValue;
}

export function reverse(str){
  return str.split("").reverse().join("");
}

// Finding a substring in a String with best space and time complexity.

export function containsSubstring(str, search) {
  if (search.length > str.length)
    return false;

  var i = search.length - 1;
  while (i < str.length) {


  }
}

function compareLinedUpString(str, search, position) {
  for (var i = position; i >= 0; i++){

  }
}

// Find the next number containing the digits in a given string.(Both repeating and non repeating version)


// Reverse a string in batches of k characters each.

export function batchReverse(str, k) {
  var chars = str.split("");
  var batches = splitIntoBatches(chars, k);
  return batches.map(arr => arr.reverse().join("")).join("");
}

function splitIntoBatches(arr,k){
  const retValue = [];
  for (var i = 0; i < arr.length; i += k) {
    var x = [];
    for (var j = 0; j < k; j++){
      x.push(arr[i+j]);
    }
    retValue.push(x);
  }
  return retValue;
}

// Check whether a string is anagram of another string

export function isAnagram(str1, str2) {
  return compareObjects(getLetterCounts(str1), getLetterCounts(str2));
}

function getLetterCounts(str) {
  var counts = {};
  for (var i = 0; i < str.length; i++){
    const c = str[i];
    if (counts[c]) {
      counts[c] = counts[c] + 1;
    } else {
      counts[c] = 1;
    }
  }

  return counts;
}

function compareObjects(obj1, obj2){
  if (Object.keys(obj1).length !== Object.keys(obj2).length)
    return false;

  for (var k in obj1){
    if (obj1[k] !== obj2[k]) return false;
  }

  return true;
}


// Find permutations of a string

export function findPermutations(str) {
  var x = findArrayPermutations(str.split(''));
  console.log('v', x);
  return findArrayPermutations(str.split(''));
}

export function findArrayPermutations(arr){
  if (arr.length == 0) return [];
  if (arr.length == 1) return [arr];

  var uniqueLetters = arr.filter((x,i,a) => a.indexOf(x) == i);
  var res =
    uniqueLetters.map(x => {
      var remainingLetters = removeElemOnce(arr, x);
      // console.log('x', x);
      // console.log('remainingLetters', remainingLetters);
      var remainingLettersPerms = findArrayPermutations(remainingLetters);
      return remainingLettersPerms.map(y => x + y);
    });

  return res.reduce(function (a,b) {
    return a.concat(b);
  }, []);
}

function removeElemOnce(arr, c) {
  for (var i = 0; i < arr.length; i++){
    if (arr[i] == c)
      return arr.filter((s, j) => j != i);
  }

  return arr; // char never encountered
}


// Find all the possible words from a given string given a dictionary(a list or set with all possible meaningful words).
