// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;


// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


// =========Part 1 =======

const divisibleByFive = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;

console.log(divisibleByFive);

const biggerNum = n1 > n4
console.log(biggerNum);

const arithmeticChain = ((n2 - n1) * n3) % n4
console.log(arithmeticChain);

const greaterThan25 = n1 >= 25 || n2 >= 25 || n3 >= 25 || n4 >= 25;
console.log(greaterThan25);



// ========Part 2=======
const mpg55speed = 30;
const mpg60speed = 28;
const mpg75speed = 23;
const fuelBudget = 175;
const costPerGallon = 3
const totalMiles = 1500



////==========55 mpg trip 1===========
console.log('====== Trip 1 55mph =====');
//total gallon needed
const totalGalTrip1 = totalMiles / mpg55speed;
console.log('You will need ' + totalGalTrip1 + ' gallons of gas for the entire trip at 55 mph.');

// is budget enough ?
let trip1Cost = totalGalTrip1 * costPerGallon;
// console.log(trip1Cost);

if (fuelBudget - trip1Cost >= 0) {
    console.log('Your budget of $175 is enough to cover the fuel expense for your trip.');
} else if (fuelBudget - trip1Cost < 0) {
    console.log('Your budget of $175 is not enough to cover the fuel expense for your trip.');
};

// how long will the trip take in hrs

const trip1Time = Math.round(totalMiles / 55)
// console.log(Math.round(trip1Time));
console.log('The trip will take about ' + trip1Time + 'hrs to get to your destination is you drive 55mph');


////==========60 mpg trip 2===========
console.log('====== Trip 2 60mph =====');
//total gallon needed
const totalGalTrip2 = Math.round(totalMiles / mpg60speed);
console.log('You will need about ' + totalGalTrip2 + ' gallons of gas for the entire trip at 60 mph.');

// is budget enough ?
let trip2Cost = totalGalTrip2 * costPerGallon;
// console.log(trip2Cost);

if (fuelBudget - trip2Cost >= 0) {
    console.log('Your budget of $175 is enough to cover the fuel expense for your trip.');
} else if (fuelBudget - trip2Cost < 0) {
    console.log('Your budget of $175 is not enough to cover the fuel expense for your trip.');
};

// how long will the trip take in hrs

const trip2Time = Math.round(totalMiles / 60)

console.log('The trip will take about ' + trip2Time + 'hrs to get to your destination is you drive 60mph');


////==========75 mpg trip 3===========
console.log('====== Trip 3 75mph =====');
//total gallon needed
const totalGalTrip3 = Math.round(totalMiles / mpg75speed);
console.log('You will need about ' + totalGalTrip3 + ' gallons of gas for the entire trip at 75 mph.');

// is budget enough ?
let trip3Cost = totalGalTrip3 * costPerGallon;
// console.log(trip2Cost);

if (fuelBudget - trip3Cost >= 0) {
    console.log('Your budget of $175 is enough to cover the fuel expense for your trip.');
} else if (fuelBudget - trip3Cost < 0) {
    console.log('Your budget of $175 is not enough to cover the fuel expense for your trip.');
};

// how long will the trip take in hrs

const trip3Time = Math.round(totalMiles / 75)

console.log('The trip will take about ' + trip3Time + 'hrs to get to your destination is you drive 75mph');









