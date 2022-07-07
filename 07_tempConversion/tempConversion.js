const ftoc = function(temp) {
  const cTemp = (temp - 32) * (5/9)
  const roundedTemp = Math.round(cTemp * 10) / 10
  return roundedTemp
}

const ctof = function(temp) {
  const fTemp = temp * (9/5) + 32
  const roundedTemp = Math.round(fTemp * 10) / 10
  return roundedTemp
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
