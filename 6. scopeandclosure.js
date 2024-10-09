console.log(a);
greet();
function greet(){
    console.log("Good Morning");
}
var a;

let message="Good Morning";
function hello(){
    let message="Good Afternoon";
    {
        let message="Good Night";
        console.log("Hello, "+message);
    }
    console.log("Hello, "+message);
    let fun=function hello2(){
        console.log("Hello again, "+message);
    }
    return fun;
}
let c=hello();
c();

function func(){
    let num=1;
    let x=()=>{
        console.log(num);
        let y=()=>{
            console.log(num);
            let z=()=>{
                console.log(num);
            }
            z();
        }
        num=100;
        y();
    }
    return x;
}
let xyz=func();
xyz();