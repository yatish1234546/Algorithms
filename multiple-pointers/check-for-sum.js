//PS: Given a sorted array find the index of two values matching the target
/*  array = [-3, -2, -1, 0, 1, 2, 4, 2, 8], target=0; output=[-1, 1] */

const arr = [-3, -2, -1, 0, 1, 2, 4, 2, 8];
const num = 4;

function checkForSum(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === num) {
      return [arr[left], arr[right]];
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(checkForSum(arr, num));
