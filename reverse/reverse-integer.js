const number = -12345;

function reverseInt(n = 0) {
  const res = n
    .toString()
    .split("")
    .reverse()
    .join("");
  return parseInt(res) * Math.sign(n);
}

console.log(reverseInt(number));
