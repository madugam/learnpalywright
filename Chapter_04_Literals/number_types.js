// Lab Exercise: Number Types and Literals in JavaScript
// Chapter 04 - Literals

// -----------------------------------------------------------
// 1. Integer Literals (Decimal)
// -----------------------------------------------------------
let integer = 42;
console.log("Integer:", integer); // 42

// -----------------------------------------------------------
// 2. Floating-Point Literals
// -----------------------------------------------------------
let floatNum = 3.14;
let floatWithoutLeading = .5;   // Valid but not recommended
let floatWithoutTrailing = 5.;  // Valid but not recommended
console.log("Float:", floatNum);           // 3.14
console.log("Float without leading 0:", floatWithoutLeading); // 0.5
console.log("Float without trailing digits:", floatWithoutTrailing); // 5

// -----------------------------------------------------------
// 3. Exponential (Scientific) Notation
// -----------------------------------------------------------
let exp1 = 1e5;   // 1 * 10^5 = 100000
let exp2 = 1.5e3; // 1.5 * 10^3 = 1500
let exp3 = 2e-3;  // 2 * 10^-3 = 0.002
console.log("Exponential 1e5:", exp1);    // 100000
console.log("Exponential 1.5e3:", exp2);  // 1500
console.log("Exponential 2e-3:", exp3);   // 0.002

// -----------------------------------------------------------
// 4. Binary Literals (Base 2) - Prefix: 0b or 0B
// -----------------------------------------------------------
let binary = 0b1010; // Decimal 10
console.log("Binary 0b1010:", binary); // 10

// -----------------------------------------------------------
// 5. Octal Literals (Base 8) - Prefix: 0o or 0O
// -----------------------------------------------------------
let octal = 0o17; // Decimal 15
console.log("Octal 0o17:", octal); // 15

// -----------------------------------------------------------
// 6. Hexadecimal Literals (Base 16) - Prefix: 0x or 0X
// -----------------------------------------------------------
let hex = 0xFF; // Decimal 255
console.log("Hexadecimal 0xFF:", hex); // 255

// -----------------------------------------------------------
// 7. Special Numeric Values
// -----------------------------------------------------------
// Infinity
console.log("Positive Infinity:", Infinity);       // Infinity
console.log("Negative Infinity:", -Infinity);      // -Infinity
console.log("Division by zero:", 1 / 0);           // Infinity

// NaN (Not-a-Number)
console.log("Not a Number:", NaN);                  // NaN
console.log("0 / 0:", 0 / 0);                       // NaN
console.log("'text' / 2:", "text" / 2);             // NaN

// -----------------------------------------------------------
// 8. Number Object Constants
// -----------------------------------------------------------
console.log("Max Safe Integer:", Number.MAX_SAFE_INTEGER);   // 9007199254740991
console.log("Min Safe Integer:", Number.MIN_SAFE_INTEGER);   // -9007199254740991
console.log("Max Value:", Number.MAX_VALUE);                 // 1.7976931348623157e+308
console.log("Min Positive Value:", Number.MIN_VALUE);        // 5e-324
console.log("EPSILON:", Number.EPSILON);                     // Smallest difference between two numbers

// -----------------------------------------------------------
// 9. typeof Operator for Numbers
// -----------------------------------------------------------
console.log("typeof 42:", typeof 42);        // "number"
console.log("typeof 3.14:", typeof 3.14);    // "number"
console.log("typeof Infinity:", typeof Infinity); // "number"
console.log("typeof NaN:", typeof NaN);      // "number" (special case!)

// -----------------------------------------------------------
// 10. BigInt (for arbitrarily large integers) - Suffix: n
// -----------------------------------------------------------
let bigIntNum = 9007199254740993n;
console.log("BigInt:", bigIntNum);           // 9007199254740993n
console.log("typeof BigInt:", typeof bigIntNum); // "bigint"

// -----------------------------------------------------------
// LAB ACTIVITY: Try these yourself
// -----------------------------------------------------------
// TODO: Declare a variable with hex value 0x1A and log it.
// TODO: Declare a variable with octal value 0o77 and log it.
// TODO: Declare a variable with binary value 0b1101 and log it.
// TODO: Write 5 million using exponential notation and log it.
// TODO: Predict and test: What is the result of 'hello' * 5 ?
