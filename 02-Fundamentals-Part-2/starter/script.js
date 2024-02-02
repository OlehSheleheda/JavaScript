/*
"use strict";

let hasDriversLicense = false;

const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log(`I can drive :D`);
*/

/*
function fruitProcessor (apples, oranges) {
const juice = `Juice with ${apples} apples and ${oranges} oranges.`
return juice;
}

const juice = fruitProcessor(2, 1);
console.log(juice)
*/

/*
function describeCountry (country, population, capitalCity) {
  return `'${country} has ${population} million people and its
capital city is ${capitalCity}`;
};

const finland = describeCountry (`Finland`, 6, `Helsinki`);
const ukraine = describeCountry(`Ukraine`, 32, `Kyiv`);
const senegal = describeCountry(`Senegal`, 12, `Dakar`);

console.log(finland, ukraine, senegal);
*/
/*
function calcAge1 (birthYear) {
    return 2024 - birthYear;
}
const age = calcAge1 (1989);


const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
}
const age2 = calcAge2(1991);

const calcAge3 = birthYear => 2024 - birthYear;
const age3 = calcAge3(2017)

console.log(age, age2, age3);
*/

/*
const yearsUntilRetire = (firstName, birthYear) => {
  const age = 2024 - birthYear;
  const retireYears = 65 - age;
  return `${firstName} retires in ${retireYears} years`;
};

const olehRetirement = yearsUntilRetire(`Oleh`, 1989);
console.log(olehRetirement)
*/

/*
function cutFruitPieces(fruit) {
  return fruit * 2;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apple and ${orangePieces} orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3))
*/

/*
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const ukraine = percentageOfWorld1(33);
const russia = percentageOfWorld1(150);
const finland = percentageOfWorld1(6);

console.log(ukraine, russia, finland);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const ukraine2 = percentageOfWorld2(33);
const russia2 = percentageOfWorld2(150);
const finland2 = percentageOfWorld2(6);

console.log(ukraine2, russia2, finland2);

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const ukraine3 = percentageOfWorld3(33);
const russia3 = percentageOfWorld3(150);
const finland3 = percentageOfWorld3(6);

console.log(ukraine3, russia3, finland3);
*/

/*
 function percentageOfWorld1 (population) {
   return (population / 7900) * 100;
 };

const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage}% of the world`;
};
console.log(describePopulation(`Ukraine`, 32));

*/

/*
function getRetireYears(birthYear) {
  const years = 2024 - birthYear;
  const yearRetire = 65 - years;
  console.log(yearRetire);
  return yearRetire;  
}  
  
function yearsUntilRetire(firstName, birthYear) {
  const retireYears = getRetireYears(birthYear);
  return `${firstName} retires in ${retireYears} years`;
}

const olehRetirement = yearsUntilRetire(`Oleh`, 1989);
console.log(olehRetirement);

*/

/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  if (scoreDolphins > scoreKoalas * 2) {
    console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
  } else if (scoreKoalas > scoreDolphins * 2) {
    console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
}
checkWinner(scoreDolphins, scoreKoalas);
*/

/*
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const population = [6, 32, 10, 20];

console.log(population.length === 4)

const percentages = [
  percentageOfWorld1(population[0]),
  percentageOfWorld1(population[1]),
  percentageOfWorld1(population[2]),
  percentageOfWorld1(population[3]),
];

console.log(percentages)
*/

// Write your code below. Good luck! 🙂
/*
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
*/

/*
const neighbours = [`Russia`, `Belorussia`, `Poland`, `Slovakia`];

console.log(neighbours);
neighbours.push(`Utopia`);
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (neighbours.includes(`Germany`) === false) {
  console.log(`Probably not a central European country :D`);
}
console.log(neighbours.indexOf(`Russia`));
neighbours[0] = `Moldova`;
console.log(neighbours);
*/

/*
const myCountry = {
  country: `Finland`,
  capital: `Helsinki`,
  language: `finnish`,
  population: 6,
  neighbours: [`Russia`, `Sweden`, `Estonia`],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million finnish-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0;
    return this.isIsland;
  }
};
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.isIsland)
*/

/*
myCountry.population = myCountry.population+3;

console.log(`${myCountry.country} has ${myCountry.population} million finnish-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);
*/

/*
const Jonas = {
  firstName: `Jonas`,
  lastName: `Schmedtmann`,
  age: 2037 - 1991,
  friends: [`Michael`, `Peter`, `Steven`]
};

console.log(`${Jonas.firstName} has ${Jonas.friends.length} friends, and his best friend is called ${Jonas.friends[0]}`);

*/

/*
const jonas = {
  firstName: `Jonas`,
  lastName: `Schmedtmann`,
  birthYear: 1991,
  job: `teacher`,
  friends: [`Michael`, `Peter`, `Steven`],
  hasDriversLicense: true,
  getSummary: function () {
    return `${this.firstName} is ${2024 - this.birthYear}-years old ${
      this.job
    }, and he ${
      this.hasDriversLicense ? `has` : `does not have`
    } driver's license.`;
  },
};

console.log(jonas.getSummary());

*/

/* Write your code below. Good luck! 🙂 */

/*
const mark = {
  fullName: `Mark Miller`,
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
const john = {
  fullName: `John Smith`,
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else if (mark.bmi < john.bmi) {console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)} else {console.log(`Amazing, but it looks as they have the same BMI ! (${mark.fullName}'s BMI is ${mark.bmi} and ${john.fullName}'s BMI is ${john.bmi})`);}
 */

/*
for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`)
}
*/

/*
const jonas = [
  `Michael`, 2001, true];
  const types = [];

for(let i = 0; i <3; i++) {
  types[i] = typeof jonas[i];
};
console.log(types);
*/

/*
const years = [1991, 2007, 1969, 2020];

const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2024-years[i]);
}
  console.log(ages);
*/

/*
const population = [6, 32, 10, 20];

const percentages2 = [];

for(let i = 0; i < population.length; i++) {
  percentages2[i]=(population[i]/7900)*100;
};

console.log(percentages2);
*/

/*
const jonas = [
  `Jonas`,
  `Schmedtmann`,
  2037 - 1991,
  `teacher`,
  [`Michael`, `Peter`, `Steven`],
];

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === `string`) break;
  console.log(jonas[i], typeof jonas[i]);
}
*/

/*
for(let exercise = 1; exercise < 7; exercise ++) {
  console.log(`Starting exersice number ${exercise}`)
  for(let rep = 1; rep < 5; rep ++) {
    console.log(`Exercise ${exercise}. Repetition ${rep}`)
  }
}
*/

/*
const listOfNeighbours = [
  [`Canada`, `Mexico`],
  [`Spain`],
  [`Norway`, `Sweden`, `Russia`],
];

for (let group = 0; group < listOfNeighbours.length; group++) {
  for (let country = 0; country < listOfNeighbours[group].length; country++) {
    console.log(`${listOfNeighbours[group][country]}`);
  }
}
*/

/*
let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6){
console.log(dice);
dice = Math.trunc(Math.random() * 6) + 1;
if(dice === 6) {console.log(`The end! You rolled ${dice}`)}
}
*/


/*
const population = [6, 32, 10, 20];

const percentages2 = [];
const percentages3 = [];

for (let i = 0; i < population.length; i++) {
  percentages2[i] = (population[i] / 7900) * 100;
}

const percentageOfWorld4 = function (percentage) {
  return (percentage / 7900) * 100;
}

let i = 0;
while(i < population.length) {
  percentages3.push(percentageOfWorld4(population[i]));
  i++;
}

console.log(percentages3);
*/


const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const calcAverage = function(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
  sum += arr[i];
  };
  console.log(sum);
  console.log(arr.length);
  return sum/arr.length;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
};

console.log(tips);
console.log(totals);

console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));

