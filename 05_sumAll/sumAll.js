const sumAll = function(a, b) {
    let finalSum = 0
    for (let index = a; index <= b; index++) {
        finalSum += a
        a++
    }
    return finalSum
}

console.log(sumAll(1, 4))

// Do not edit below this line
module.exports = sumAll;
