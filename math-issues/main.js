Math.round = function(number) {
  const numberSplit = String(number).match(/(\d*)[\.]*(\d*)/);
  return Number(`0.${numberSplit[2]}`) >= 0.5
    ? Number(numberSplit[1]) + 1
    : Number(numberSplit[1]);
};

Math.ceil = function(number) {
  const numberSplit = String(number).match(/(\d*)[\.]*(\d*)/);
  return numberSplit[2] ? Number(numberSplit[1]) + 1 : Number(numberSplit[1]);
};

Math.floor = function(number) {
  const numberSplit = String(number).match(/(\d*)[\.]*(\d*)/);
  return Number(numberSplit[1]);
};

console.log(Math.floor(20.8));
