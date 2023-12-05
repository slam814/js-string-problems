let first = 5;
let second = 7;

console.log(first, second);

const temp = first;
first = second;
second = temp;

console.log(first, second);

// Anther way swap javaScript

let num1 = 50;
let num2 = 70;

[num1, num2] = [num2, num1];


console.log(num1, num2);

