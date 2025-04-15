const { printFavoriteActivities, convertDistance, calculateStatistics, calculateCompoundInterest } = require('./utilities');

// Example usage
printFavoriteActivities('hiking', 'reading', 'cooking'); // Prints favorite activities

// Distance conversion example
const distanceInMeters = 5000; // Example distance in meters
const kilometers = convertDistance(distanceInMeters, 'meters', 'kilometers');
const miles = convertDistance(distanceInMeters, 'meters', 'miles');
console.log(`${distanceInMeters} meters is equal to ${kilometers.toFixed(2)} kilometers and ${miles.toFixed(2)} miles.`);

// Statistics calculation
const numbers = [5, 2, 3, 8, 2, 7, 5];
const { average, median, mode } = calculateStatistics(numbers);
console.log(`Input numbers: ${numbers.join(', ')}`);
console.log(`Average: ${average.toFixed(2)}, Median: ${median}, Mode: ${mode}`);

// Compound interest calculation
const principal = 1000; // Example principal amount
const rate = 5; // Example interest rate
const time = 2; // Example time in years
const timesCompounded = 4; // Example times compounded per year
const { amount, interest } = calculateCompoundInterest(principal, rate, time, timesCompounded);
console.log(`Principal: $${principal}, Rate: ${rate}%, Time: ${time} years, Times Compounded: ${timesCompounded}`);
console.log(`Total amount after ${time} years: $${amount.toFixed(2)}, Interest earned: $${interest.toFixed(2)}`);
