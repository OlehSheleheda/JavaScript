// Remember, we're gonna use strict mode in all scripts now!
`use strict`;

/*
const temperatures1 = [3, -2, -6, -1, `error`, 9, 13, 17, 22, 14, 9, 5];
const temperatures2 = [0, 5, 22, 18, true, 32];

const calcTempAmplitude = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== `number`) continue;
    if (temps[i] > max) {
      max = temps[i];
    }
    if (temps[i] < min) {
      min = temps[i];
    }
  }
  console.log(max, min);
  return max - min;
};

console.log(calcTempAmplitude(temperatures1, temperatures2));
*/

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const temp = [12, 5, -5, 0, 4];

const showTemp = function (arr) {
  let message = '';

  for (let i = 0; i < arr.length; i++) {
    message += `${arr[i]} ℃ in ${i + 1} day(s)... `;
  }
  return message;
};

console.log(showTemp(temp));
