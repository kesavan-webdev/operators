//OPERATORS

//arithematic operators

// +add  -sub  %remainder  *multiply  /divide  **power
// i/p numbers --> o/p  numbers

//string concatenation
//  +
let indiaNorth = 70;
let indiaSouth = 70;

let indiaPopulation = indiaNorth + indiaSouth;

console.log(indiaPopulation);

console.log(indiaPopulation / 2);

console.log(++indiaPopulation);

let finlandPopulation = 6;

console.log(indiaPopulation > finlandPopulation);

let averagePopulation = 33;

console.log(indiaPopulation < averagePopulation);

const country = "Portugal";
const continent = "Europe";
const population = 11;
const language = "Portuguese";
const description =
  country +
  " is in " +
  continent +
  " and it's " +
  population +
  " million people speak " +
  language;

console.log(description);

//string--template literals --ES6

console.log(
  `${country} is in ${continent} and it's ${population} million people speak ${language}`
);

//coding challenge1
let marksWeight = 50;
let marksHeight = 1.6;

let jhonsWeight = 60;
let jhonsHeight = 1.5;

const marksBMI = marksWeight / marksHeight ** 2;

const jhonsBMI = jhonsWeight / (jhonsHeight * jhonsHeight);

console.log(marksBMI);
console.log(jhonsBMI);

//Conditional Statements or Branching or Taking Decisions
// i/p boolean or convert into boolean  --> o/p any
//if else -- two cases only
//if elseif elseif..etc --> use only max 4 cases
//switch case  --use above 4 cases

//coding challenge2
if (marksBMI > jhonsBMI) {
  console.log(`marksBMI is higher ${parseInt(marksBMI)}`);
} else {
  console.log(`jhonsBMI is higher ${parseInt(jhonsBMI)}`);
}

if (population > averagePopulation) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${
      averagePopulation - population
    } million below average`
  );
}
