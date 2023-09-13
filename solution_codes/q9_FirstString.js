const arr = [1,2,999,44,"Rohit",43,"Garg"];

for(let i=0;i<arr.length;i++){
    if(typeof arr[i] === "string"){
        console.log("Found the first string: ",arr[i]);
        break;
    }
}