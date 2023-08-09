let js = "amazing";
//if (js === "amazing") alert("wow");
let g = 40 + 5;
console.log(g);

const country = "Ireland";
const continent = "Europe";
let population = 4500000;
let finlandPopulation = 6000000;

console.log(country, continent, population);

const isIsland = true;
const language = "Gaeilge";

console.log(isIsland, country, continent, population, language);
console.log(population / 2);
console.log(`True or false, more people live in Finland than in Ireland? The answer is ${finlandPopulation > population}`)

scoreDolphins = ((96+108+89) / 3);
scoreKoalas = ((88+91+110) / 3);

if(scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy")
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy") 
} else {
    console.log("Both win the trophy")
};


let bill = 225;
const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
console.log(`The bill was ${bill}, therefore the tip is ${tip} and the full amount is ${bill + tip} `)  