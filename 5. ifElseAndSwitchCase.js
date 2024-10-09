let x=7;
let y=11;
let z=30;
if(x>y && x>z){
    console.log(`x is greatest.`)
}
else if(y>z){
    console.log(`y is greatest.`)
}
else{
    console.log(`y is greatest.`)
}

if(2==="2"){
    console.log("Equal");
}
else{
    console.log("Not Equal");
}

let day=4;
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid input");
        break;
}

//falsy Values:- 0, -0, false, undefined, null, NaN, BigInt 0n, ""
//truthy Values:- "0", "false", " ", [], {}, function(){}

let email="ahsd@gmail.com"
if(email){
    console.log("Got the email");
}
arr=[]
if(arr.length===0){
    console.log("Empty array");
}
obj={}
if(Object.keys(obj).length===0){
    console.log("Empty object");
}

//Nullish Coalescing Operator
let val1;
val1 = 5 ?? 10;
console.log(val1);
let val2 = null ?? 20;
console.log(val2);
let val3 = undefined ?? 15;
console.log(val3);

//Ternary operator
z>20 ? console.log(`${z} is greater than 20`) : console.log(`${z} is less than 20`);
