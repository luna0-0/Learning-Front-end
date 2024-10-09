function average(x, y){
    return (x+y)/2
}
let a=11, b=18, c=22;
console.log(`Average of ${a} and ${b} is: ${average(a,b)}`);
console.log(`Average of ${b} and ${c} is: ${average(b,c)}`);
console.log(`Average of ${a} and ${c} is: ${average(a,c)}`);

const greet=()=>{
    console.log("Good Morning");
}
greet();

const sum=(a,b)=>{
    return a+b;
}
console.log("Sum is: "+sum(a,b));
