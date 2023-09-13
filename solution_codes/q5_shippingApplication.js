let typeOfPackage = "standard";

switch (typeOfPackage){
    case "standard":
        console.log("delivery time = 3-5 days");
        break;

    case "express":
        console.log("delivery time = 1-2 days");
        break;
    
    case "overnight":
        console.log("delivery time = tomorrow");
        break;

    default:
        console.log("invalid input");
}