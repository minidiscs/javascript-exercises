const repeatString = function(string, num) {
    if (num < 0) return 'ERROR';
    let shout = '';
    for (let index = 0; index < num; index++) {
        shout += string;
     }
     return shout;

};

// Do not edit below this line
module.exports = repeatString;
