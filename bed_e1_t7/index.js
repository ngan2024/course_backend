import { milesToKilometers, kilometersToMiles } from "./converter.js";
//call node index.js mi_to_km 10
const conversionType = process.argv[2];  //argv[2]=mi_to_km
const distance = parseFloat(process.argv[3]);  //argv[3] = 10

if (conversionType === "mi_to_km") {
    console.log(milesToKilometers(distance));
} else if (conversionType === "km_to_mi") {
    console.log(kilometersToMiles(distance));
} else {
    console.error("Invalid conversion type");
}