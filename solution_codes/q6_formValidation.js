let Name = "Rohit";
let email = "asdd@gmail.com"
let age = "20";

if(typeof Name != "string"){
    console.log("Name should Be a String");
}
else if(typeof email != "string"){
    console.log("email should Be a String");
}
else if(typeof age != "number"){
    console.log("age should be a Number");
}
else{
    console.log("All Entries Are Validated Successfully");
}