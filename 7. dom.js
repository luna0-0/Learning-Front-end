let heading=document.getElementById("heading");
console.dir(heading);
console.log(heading.innerText);

let about=document.getElementById("subheading");
console.log(about.innerHTML)

let detail=document.getElementsByClassName("detail");
console.dir(detail);

let button=document.getElementsByTagName("button");
console.dir(button);

//Query Selector
let firstPara = document.querySelector("p"); //1st paragraph only
console.dir(firstPara);
console.log(firstPara.tagName);

let allPara = document.querySelectorAll("p"); //all paragraphs
console.dir(allPara);

let allDetail=document.querySelector(".detail");
console.dir(allDetail);

console.dir(document.body.firstChild)

let hidden=document.getElementById("hide");
console.log(hidden.textContent);