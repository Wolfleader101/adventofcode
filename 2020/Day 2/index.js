const fs = require('fs');

let passwords = fs.readFileSync('input.txt', 'utf-8').split('\n')

// CHALLENGE 1
var total1 = 0;
// passwords.forEach(pass => {
//     let split = pass.split(':')
//     let policy = split[0].slice(0, -1)
//     let policyMin = policy.split('-')[0]
//     let policyMax = policy.split('-')[1]
//     let letter = split[0].slice(-1)
//     let fullPass = split[1]
    
//     var count = 0;
//     fullPass.split('').forEach(passLetter => {
//         if (passLetter == letter) ++count

//     });
//     if (count >= policyMin && count <= policyMax) {
//         ++total1
//     }
// })
// console.log(`Challenge 1 total: ${total1}`)

// CHALLENGE 2
var total2 = 0;
passwords.forEach(pass => {
    let split = pass.split(':')
    let policy = split[0].slice(0, -1)
    let policyFirstPos = policy.split('-')[0]
    let policySecondPos = policy.split('-')[1]
    let letter = split[0].slice(-1)
    let fullPass = split[1].substring(1)
    var valid = false;
    fullPass.split('').forEach((passLetter, i) => {
        pos = i + 1;
        if (pos == policyFirstPos) {
            if (letter == passLetter) {
                valid = true;
            }
        }
        if (pos == policySecondPos) {
            if (letter == passLetter) {
                valid ? valid = false : valid = true;
            }
        }

    });
    if (valid) {
        ++total2
    }
})
console.log(`Challenge 2 total: ${total2}`)