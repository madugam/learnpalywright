// 02_incrementOperators.js - Pre-increment and Post-increment example

let a = 10;
let b = ++a;  // Pre-increment: a becomes 11, then b = 11
let c = a++;  // Post-increment: c = 11, then a becomes 12

console.log("a:", a); // Output: 12
console.log("b:", b); // Output: 11
console.log("c:", c); // Output: 11
console.log("a again:", a); // Output: 12

let i = 10;
console.log(++i + i);
console.log(i); // Output: 11

q = 5;
console.log(q++ + ++q - --q + q-- + ++q);
console.log(q); // Output: 5
