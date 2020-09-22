let str = "Jon Snow";

function approach1(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(approach1(str));

function approach2(str) {
  return str.split("").reduce((cur, prev) => prev + cur, "");
}

console.log(approach2(str));
