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
  console.log(`jhonsBMI is higher ${jhonsBMI.toFixed(1)}`); //  .toFixed(how many decimals u want) jsMETHOD
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

//TYPE CONVERSION & COERCION

//**All the input we get are always string type

//string to number//
let val = "66";
console.log(val);
console.log(typeof val); // --> string

val = Number(val);
console.log(val);
console.log(typeof val); // --> number

let name1 = "kesav";
console.log(name1);
console.log(typeof name1); // --> string

name1 = Number(name1); // when we are converting non-numerical strings to number it will be NaN
console.log(name1); // -->it show NaN .  Nan is also number Datatype
console.log(typeof name1); // -->number

// string to boolean//
//Boolean()

let length = "112";
console.log(length);

length = Boolean(length);
console.log(length); // ---> true
console.log(typeof length);

let district = "coimbatore";
console.log(district);

district = Boolean(district);
console.log(length); // ---> true
console.log(typeof district);

let emptySpaceGiven = " ";
console.log(emptySpaceGiven);

emptySpaceGiven = Boolean(emptySpaceGiven);
console.log(emptySpaceGiven); // ---> true
console.log(typeof emptySpaceGiven);

let emptySpaceNotGiven = "";
console.log(emptySpaceNotGiven);

emptySpaceNotGiven = Boolean(emptySpaceNotGiven);
console.log(emptySpaceNotGiven); // -->false
console.log(typeof emptySpaceNotGiven);

// if ("55" > "49") {
//   console.log(true);
// } else {
//   console.log(false);
// }
