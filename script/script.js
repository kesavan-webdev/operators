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

// coding challenge3

let averageScoreOfDolphins = (96 + 108 + 89) / 3;
let averageScoreOfKoalas = (88 + 91 + 110) / 3;

if (averageScoreOfDolphins > averageScoreOfKoalas) {
  console.log(` Dolphins ${averageScoreOfDolphins} are winners`);
} else if (averageScoreOfDolphins < averageScoreOfKoalas) {
  console.log(` Koalas ${averageScoreOfKoalas} are winners`);
} else if (averageScoreOfDolphins === averageScoreOfKoalas) {
  console.log(`Match Drawn`);
} else {
  console.log(`no result`);
}
//bonus1

averageScoreOfDolphins = (97 + 112 + 101) / 3;
averageScoreOfKoalas = (109 + 95 + 123) / 3;
if (
  averageScoreOfDolphins > averageScoreOfKoalas &&
  averageScoreOfDolphins >= 100
) {
  console.log(` Dolphins ${averageScoreOfDolphins} are winners`);
} else if (
  averageScoreOfDolphins < averageScoreOfKoalas &&
  averageScoreOfKoalas >= 100
) {
  console.log(` Koalas ${averageScoreOfKoalas} are winners`);
} else if (averageScoreOfDolphins === averageScoreOfKoalas) {
  console.log(`Match Drawn`);
} else {
  console.log(`no result`);
}

//bonus2
averageScoreOfDolphins = (95 + 109 + 109) / 3;
averageScoreOfKoalas = (109 + 95 + 109) / 3;
if (
  averageScoreOfDolphins > averageScoreOfKoalas &&
  averageScoreOfDolphins >= 100
) {
  console.log(` Dolphins ${averageScoreOfDolphins} are winners`);
} else if (
  averageScoreOfDolphins < averageScoreOfKoalas &&
  averageScoreOfKoalas >= 100
) {
  console.log(` Koalas ${averageScoreOfKoalas} are winners`);
} else if (
  averageScoreOfDolphins === averageScoreOfKoalas &&
  averageScoreOfDolphins >= 100 &&
  averageScoreOfKoalas >= 100
) {
  console.log(`Match Drawn`);
} else {
  console.log(`no result`);
}

//coding challenge4

let bill = 275;
let tipBetween50_300 = bill * 0.15;
let tipForOther = bill * 0.2;
if (bill >= 50 && bill <= 300) {
  console.log(
    `bill value ${bill} tip ${tipBetween50_300} total bill ${
      bill + tipBetween50_300
    }`
  );
} else {
  console.log(
    `bill value ${bill} tip ${tipForOther} total bill ${bill + tipForOther}`
  );
}

//ternary operator
bill = 600;

bill >= 50 && bill <= 300
  ? console.log(
      `bill value ${bill} tip ${tipBetween50_300} total bill ${
        bill + tipBetween50_300
      }`
    )
  : console.log(
      `bill value ${bill} tip ${tipForOther} total bill ${bill + tipForOther}`
    );

//switch case

//use switch case above four conditions
//switch case needs condition variable
//break keyword is used in switch to getaway .it doesn't execute following codes.

let SpeakingLanguage; //prompt("language");

switch (SpeakingLanguage) {
  case "hindhi":
    console.log(`your language is top 1st`);
    break;
  case "tamil":
    console.log(`your language is top 2nd`);
    break;
  case "telugu":
    console.log(`your language is top 3rd`);
    break;
  case "malayalam":
    console.log(`your language is top 4th`);
    break;
  default:
    console.log(`Your language is not in top4`);
}

//FUNCTION

//function declaration
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
}

const finlandCountry = describeCountry("finland", 6, "helsinki");
const indiaCountry = describeCountry("India", 240, "Newdelhi");
const americaCountry = describeCountry("America", 40, "Newyork");

console.log(finlandCountry);
console.log(indiaCountry);
console.log(americaCountry);

function percentageOfWorld1(population) {
  return `your country population is ${((population / 7900) * 100).toFixed(
    1
  )}%`;
}

const indiaPercentage = percentageOfWorld1(2400);
const americaPercentage = percentageOfWorld1(400);
const finlandPercentage = percentageOfWorld1(60);

console.log(indiaPercentage, americaPercentage, finlandPercentage);

//Function expression or Statement

const percentageOfWorld2 = function (population) {
  return `your country population is ${((population / 7900) * 100).toFixed(
    1
  )}%`;
};

let chinaPercentage = percentageOfWorld2(1400);
let pakistanPercentage = percentageOfWorld2(800);
let srilankaPercentage = percentageOfWorld2(120);

console.log(chinaPercentage, pakistanPercentage, srilankaPercentage);

//Arrow function  (statement or expression function)

//explicit type
let percentageOfWorld3 = (population) => {
  return `your country population is ${((population / 7900) * 100).toFixed(
    1
  )}%`;
};

chinaPercentage = percentageOfWorld2(3400);
pakistanPercentage = percentageOfWorld2(2400);
srilankaPercentage = percentageOfWorld2(899);

console.log(chinaPercentage, pakistanPercentage, srilankaPercentage);

const describePopulation = (country, population) => {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}`;
};

const indiaPopulationAndPercent = describePopulation("india", 2400);
const chinaPopulationAndPercent = describePopulation("china", 1900);
const americaPopulationAndPercent = describePopulation("america", 800);

console.log(indiaPopulationAndPercent);
console.log(chinaPopulationAndPercent);
console.log(americaPopulationAndPercent);

//coding challenge5
// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
//  Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

let calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let avgScoreFfDolphins = calcAvg(44, 23, 71);
let avgScoreOfKoalas = calcAvg(65, 54, 49);

let checkWinner = (avgScoreFfDolphins, avgScoreOfKoalas) => {
  if (avgScoreFfDolphins >= avgScoreOfKoalas * 2) {
    console.log(`Dolphin's won(${avgScoreFfDolphins} vs ${avgScoreOfKoalas}) `);
  } else if (avgScoreFfDolphins >= avgScoreOfKoalas * 2) {
    console.log(`Koala's won(${avgScoreOfKoalas} vs ${avgScoreFfDolphins}) `);
  } else {
    console.log(`no result`);
  }
};
checkWinner(avgScoreFfDolphins, avgScoreOfKoalas);
avgScoreFfDolphins = calcAvg(85, 54, 41);
avgScoreOfKoalas = calcAvg(23, 34, 27);
checkWinner(avgScoreFfDolphins, avgScoreOfKoalas);

//ARRAY

let populationOfcountry = [2400, 1800, 900, 60];

console.log(populationOfcountry.length === 4);

let percentages = [2400, 1800, 900, 60];

console.log(percentageOfWorld1(percentages[0]));
console.log(percentageOfWorld1(percentages[1]));
console.log(percentageOfWorld1(percentages[2]));
console.log(percentageOfWorld1(percentages[3]));

//array methods

let neighbours = ["pakistan", "china", "srilanka", "bangladesh"];
console.log(neighbours);

console.log(neighbours.push("nepal")); //it will return array index value
console.log(neighbours);
console.log(neighbours.pop()); //it will return popedup array value
console.log(neighbours);

if (neighbours.includes("germany")) {
  console.log("Probably a central European country :D");
}
console.log("Probably not a central European country :D");

console.log(neighbours.indexOf("bangladesh"));
let indexOfNameChangingCountry = neighbours.indexOf("bangladesh");
neighbours[indexOfNameChangingCountry] = "banglatigers";
console.log(neighbours);

// coding challenge6

let calcTip = (billvalue) => {
  if (billvalue >= 50 && billvalue <= 300) {
    console.log(
      `bill value ${billvalue} tip ${billvalue * 0.15} total bill ${
        billvalue + billvalue * 0.15
      }`
    );
    return billvalue * 0.15;
  } else {
    console.log(
      `bill value ${billvalue} tip ${billvalue * 0.2} total bill ${
        billvalue + billvalue * 0.2
      }`
    );
    return billvalue * 0.2;
  }
};
calcTip(100);

let bills = [125, 555, 44];
let tips = [];
tips.push(calcTip(bills[0]));
tips.push(calcTip(bills[1]));
tips.push(calcTip(bills[2]));

console.log(bills);
console.log(tips);
