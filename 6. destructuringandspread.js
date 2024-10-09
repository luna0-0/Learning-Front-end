let arr=[3, 5, 8, 11, 12, 31, 40, 13];
let [a, b, c]=arr;
console.log(a, b, c);
[a, b, c, ...rest]=arr;
console.log(a, b, c, rest);
[a, , , ...rest]=arr;
console.log(a, rest);

let {e, d} = {e: 10, d: 20}
console.log(e, d);

//Spread operator
let arr1=[3, 4, 5, 7];
let obj1={...arr1};
console.log(obj1);

let sum=(n1, n2, n3)=>{
    return n1+n2+n3;
}
let s=sum(...arr1);
console.log(s);

let obj2={
    id: 37183,
    name: "luna",
    salary: 50000
}
console.log({...obj2, name: "Dahal"});