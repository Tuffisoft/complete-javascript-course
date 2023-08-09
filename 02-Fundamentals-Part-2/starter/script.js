"use strict";

function logger() {
  console.log("My name is Fi");
}

logger();

function fruitProcessor(apples, bananas) {
  console.log(apples, bananas);
  const juice = `Juice with ${apples} apples and ${bananas} bananas.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 3);
console.log(appleOrangeJuice);

//FUNCTION DECLARATION
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

console.log(calcAge1(1984));
const age1 = calcAge1(1984);

//FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1984);
console.log(age1, age2);
console.log(calcAge2);

//ARROW FUNCTION WITH 1 PARAMETER
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1990);
console.log(age3);
console.log(calcAge3(1990));

const yearsUntilRetirement = (birthYear) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntilRetirement(1984))

//ARROW FUNCTION WITH 2 PARAMETERS

const yearsUntilRetirementWithName = (birthYear, name) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${name} has ${retirement} years until retirement`;
}

console.log(yearsUntilRetirementWithName(1984, "Fi"))


//FUNCTIONS CALLING OTHER FUNCTIONS
function cutFruitPieces (fruit) {
    return fruit * 4;
}


function mixer (orangesAmount, kiwisAmount) {
    const orangePieces = cutFruitPieces(orangesAmount);
    const kiwiPieces = cutFruitPieces(kiwisAmount);
    const mix = `The mix contains ${orangePieces} oranges and ${kiwiPieces} kiwis.`;
    return mix;
}

console.log(mixer(5,8))

//CHALLENGE #1
const calcAverage = (a,b,c) => {
  return (a + b + c) / 3
}

//CHALLENGE #5

const scoreDolphins = calcAverage(44,23,71)
const scoreKoalas = calcAverage(65,54,49)

console.log(`The dolphins average is ${scoreDolphins}`);
console.log(`The koalas average is ${scoreKoalas}`);

function checkWinner () {
  if (scoreDolphins === scoreKoalas) {
    return "No Winner!"
  } else if (scoreDolphins > scoreKoalas) {
    return "Dolphin Win!"
  } else {
    return "Koalas win!"
  }
}

console.log(checkWinner())


