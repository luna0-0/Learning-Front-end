arr=[10, "apple", "car", 43.3435, 342]
for(let i=0; i<arr.length; i++){
    if(i==3){
        break;
    }
    console.log(arr[i]);
}

//nested loop
for(let i=2; i<=5; i++){
    if(i==4){
        continue;
    }
    for(let j=1; j<=10; j++)
    {
        console.log(`${i} * ${j} = ${i*j}`);
    }
    console.log("\n");
}
let i=0, j=0;
while(i!=5){
    console.log(i);
    i++;
}