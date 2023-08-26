var readlinesync = require("readline-sync");
let money = readlinesync.question("Enter the money:");
const Onekgapple = 100;
const Onekgorenge = 200;
const RambutanONEKG = 400;
const pineappleONEKG = 200;
const mangoONEKG = 500;
const PapayaONEKG = 300;
const PeachONEKG = 600;

console.log("Total Fruits = 12");

function calculateTotalCost(a, b, c, d, e, f, g) {
    const totalcost = a + b + c + d + e + f + g;
    return totalcost;
}

const totalCost = calculateTotalCost(Onekgapple, Onekgorenge, RambutanONEKG, pineappleONEKG, mangoONEKG, PapayaONEKG, PeachONEKG);

if (money >= totalCost) {
    console.log("You can buy all the fruits");
} else {
    console.log("You cannot buy all the fruits.");
}