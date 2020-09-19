// Check if two arrays are numerical anagrams

let a = [1, 2, 3, 4];
let b = [9, 4, 1, 15];

function anagram(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let el of a) {
    frequencyCounter1[el] = (frequencyCounter1[el] || 0) + 1;
  }

  for (let el of b) {
    frequencyCounter2[el] = (frequencyCounter2[el] || 0) + 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

console.log(anagram(a, b));
