let p1=document.getElementById("para1");
console.log(p1.getAttribute("id"));
p1.setAttribute("id","paragraph");
console.log(p1.getAttribute("id"));

let box=document.getElementById("box");
box.style.backgroundColor="red";
box.style.height = "50px";

let newButton=document.createElement("button");
newButton.innerText="Button";
let div=document.getElementsByClassName("div");
div[0].append(newButton)

let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>Heading</i>"
let body=document.querySelector("body");
body.prepend(newHeading);

p1.remove();