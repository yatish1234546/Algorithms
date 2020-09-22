//Consider an Array
const arr = [1, 1, 1, 2];
// Remove all duplicates in an array without taking another array variable; Result = [1,2]

for (let i = 0; i < arr.length; i++) {
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] === arr[j - 1]) {
      arr.splice(j - 1, 1);
    }
  }
}

console.log(arr);
