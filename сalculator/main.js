const Calculator = function() {
  this.evaluate = string => {
    // do code here

    while (string.match(/[\/\*\-\+]+ /)) {
      string = string
        .replace(/(-*[\d\.]+) \/ (-*[\d\.]+)/g, (match, p1, p2) => p1 / p2)
        .replace(/(-*[\d\.]+) \* (-*[\d\.]+)/g, (match, p1, p2) => p1 * p2)
        .replace(
          /(-*[\d\.]+) \+ (-*[\d\.]+)/g,
          (match, p1, p2) => Number(p1) + Number(p2)
        )
        .replace(
          /(-*[\d\.]+) \- (-*[\d\.]+)/g,
          (match, p1, p2) => Number(p1) - Number(p2)
        );
    }
    return string;
  };
};
const calculator = new Calculator();
console.log(calculator.evaluate("2 / 2 + 3 * 4 - 6"));
