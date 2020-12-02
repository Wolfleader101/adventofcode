const fs = require('fs');

let passwords = fs.readFileSync('input.txt', 'utf-8').split('\n')
var total = 0;
passwords.forEach(pass => {
    let split = pass.split(':')
    let policy = split[0].slice(0, -1)
    let policyMin = policy.split('-')[0]
    let policyMax = policy.split('-')[1]
    let letter = split[0].slice(-1)
    let fullPass = split[1]
    
    var count = 0;
    fullPass.split('').forEach(passLetter => {
        if (passLetter == letter) ++count

    });
    if (count >= policyMin && count <= policyMax) {
        ++total
    }
})
console.log(total)