const fs = require('fs')

let numbers = fs.readFileSync('input.txt', 'utf-8').split('\n').map(Number)

// 1
numbers.forEach((num, i) => {
    numbers.forEach((secondNum, i) => {
        const sum = num + secondNum;
        if (sum == 2020) {
            console.log(num * secondNum)
        }
    })
});

// 2
numbers.forEach(num => {
    numbers.forEach(secondNum => {
        numbers.forEach(thirdNum => {
            const sum = num + secondNum + thirdNum;
            if (sum == 2020) {
                console.log(num * secondNum * thirdNum)
            
            }
        })
    })
}); 
        
    