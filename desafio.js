const data = require('./dados.json');

function sumWithIndex() {
    let index = 13;
    let sum = 0;
    let K = 0;

    while(K < index) {
        K = K + 1;
        sum = sum + K;
    }

    console.log("Sum equals to: " + sum);
}

sumWithIndex();

function verifyFibonacci(number) {
    let first = 0;
    let second = 1;

    while(second < number) {
        let temp = second;
        second = first + second;
        first = temp;
    }

    if(number === second || number === 0) {
        console.log(`${number} - Belongs to the Fibonacci sequence`);
    } else {
        console.log(`${number} - Does not belong to the Fibonacci sequence`);
    }
}

verifyFibonacci(55);

function analyzeRevenue(data) {
    let validValues = data.filter(d => d.valor > 0).map(d => d.valor);
    let minValue = Math.min(...validValues);
    let maxValue = Math.max(...validValues);
    let avg = validValues.reduce((sum, val) => sum + val, 0) / validValues.length;
    let aboveAvg = validValues.filter(val => val > avg).length;
    
    console.log("Lowest revenue:", minValue);
    console.log("Highest revenue:", maxValue);
    console.log("Days above average:", aboveAvg);
}
analyzeRevenue(data);

const revenueByState = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Others": 19849.53
};

function calculatePercentage(revenue) {
    let total = Object.values(revenue).reduce((sum, val) => sum + val, 0);
    for (let state in revenue) {
        let percentage = (revenue[state] / total) * 100;
        console.log(`${state}: ${percentage.toFixed(2)}%`);
    }
}
calculatePercentage(revenueByState);

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log("Reversed string:", reversed);
}
reverseString("Target Challenge");
