var a=10;           // global/function scoped
console.log("a = "+a);
var a=15;           // can be redefined
console.log("a = "+a);

let b=20;           //braces(blocked) scoped
console.log("b = "+b);
// let b=20;        // can not be redefined
b=20;               //can be reassigned
console.log("b = "+b);

const c=30;
console.log("c = "+c);
// const c=20;        // can not be redefined
// c=20;              //can not be reassigned

// DATA TYPES
let num = 343.2443;
console.log("number = "+num);
let str = "Hello World!";
console.log("string = "+str);
let bool = true;
console.log("boolean = "+b);
let u;
console.log(u);
let n=null;
console.log(n);

console.log(`\nThis is a string \t'${str}'`);