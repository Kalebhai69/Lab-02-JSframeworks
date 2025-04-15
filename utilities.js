// utilities.js

// Function to print favorite activities
function printFavoriteActivities(activity1, activity2, activity3) {
    console.log(`Favorite activities: ${activity1}, ${activity2}, ${activity3}`);
}

// Function to convert distance
function convertDistance(value, fromUnit, toUnit) {
    const conversionRates = {
        meters: 1,
        kilometers: 0.001,
        miles: 0.000621371
    };
    return (value * conversionRates[toUnit]) / conversionRates[fromUnit];
}

// Function to calculate statistics
function calculateStatistics(numbers) {
    const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
    const median = numbers.sort((a, b) => a - b)[Math.floor(numbers.length / 2)];
    const mode = numbers.sort((a,b) =>
      numbers.filter(v => v === a).length
      - numbers.filter(v => v === b).length
    ).pop();
    
    return { average, median, mode };
}

// Function to calculate compound interest
function calculateCompoundInterest(principal, rate, time, timesCompounded) {
    const amount = principal * Math.pow((1 + (rate / 100) / timesCompounded), timesCompounded * time);
    const interest = amount - principal;
    return { amount, interest };
}

module.exports = { printFavoriteActivities, convertDistance, calculateStatistics, calculateCompoundInterest };

  
