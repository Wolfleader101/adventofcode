const fs = require('fs')

let numbers = fs.readFileSync('input.txt', 'utf-8').split('\n').map(Number)

numbers.forEach((num, i) => {
    numbers.forEach((secondNum, i) => {
        const sum = num + secondNum;
        if (sum == 2020) {
            console.log(num * secondNum)
        }
    })
}); 
        
    