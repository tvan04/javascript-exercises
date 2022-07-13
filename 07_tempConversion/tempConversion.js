const ftoc = function(f) {
  let x = (f-32)*5/9;
  return Number(x.toFixed(1))
};

const ctof = function(c) {
  let x = c*(9/5)+32;
  return Number(x.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
