btn2=document.querySelector("#btn2");
btn2.ondblclick=(event)=>{
    console.log('Second button is clicked');
    alert('Hello');
    console.log(event.type);
    console.log(event.target);
    console.log(event.clientX, event.clientY);
}

box=document.querySelector("#box");
box.addEventListener("mouseover", ()=>{
    console.log("HELLO WORLD!!");
});

btn1=document.querySelector("#btn1");
btn1.addEventListener("click",(event)=>{
    console.log('First button is clicked -handler 1');
});
const handler2=()=>{
    console.log('First button is clicked -handler 2');
};
btn1.addEventListener("click", handler2);
btn1.addEventListener("click",()=>{
    console.log('First button is clicked -handler 3');
});
btn1.addEventListener("click",()=>{
    console.log('First button is clicked -handler 4');
});
btn1.removeEventListener("click", handler2);