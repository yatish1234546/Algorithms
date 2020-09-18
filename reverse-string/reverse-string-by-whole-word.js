let str1 = "I live in Pune";
str1 = str1.split(" ").reduce((cur, prev) => prev + " " + cur, "");
console.log(str1);
