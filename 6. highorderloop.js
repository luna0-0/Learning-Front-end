// for of
const arr = [3, 5, 6, 20]
for(let a of arr){
    console.log(a);
}

// Maps
const obj = new Map()
obj.set('Np', 'Nepal')
obj.set('In', 'India')
obj.set('USA', 'United States of America')
obj.set('UK', 'United Kingdom')
for(const [key, values] of obj){
    console.log(`${key}: ${values}`);
}

//for in
myObj={
    c: "C",
    cpp: "C++",
    js: "JavaScript",
    py: "python"
}
for(const key in myObj){
    console.log(`${key} => ${myObj[key]}`);
}
for(const a in arr){
    console.log(arr[a]);
}

//forEach
let languages = ["C", "C++", "JavaScript", "Python"]
languages.forEach(function(i){
    console.log(i);
})
console.log("\n");
let coding=[
    {
        name: "C",
        shortForm: "c"
    },
    {
        name: "C++",
        shortForm: "cpp"
    },
    {
        name: "Python",
        shortForm: "py"
    },
]
coding.forEach(function(i){
    console.log(i.shortForm);
})
function print(i){
    console.log(i);    
}
coding.forEach(print)