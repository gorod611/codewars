function zero(arg) {
  return typeof arg === "function" ? arg(0) : 0;
}
function one(arg) {
  return typeof arg === "function" ? arg(1) : 1;
}
function two(arg) {
  return typeof arg === "function" ? arg(2) : 2;
}
function three(arg) {
  return typeof arg === "function" ? arg(3) : 3;
}
function four(arg) {
  return typeof arg === "function" ? arg(4) : 4;
}
function five(arg) {
  return typeof arg === "function" ? arg(5) : 5;
}
function six(arg) {
  return typeof arg === "function" ? arg(6) : 6;
}
function seven(arg) {
  return typeof arg === "function" ? arg(7) : 7;
}
function eight(arg) {
  return typeof arg === "function" ? arg(8) : 8;
}
function nine(arg) {
  return typeof arg === "function" ? arg(9) : 9;
}

function plus(arg2) {
  return function(arg1) {
    return arg1 + arg2;
  };
}
function minus(arg2) {
  return function(arg1) {
    return arg1 - arg2;
  };
}
function times(arg2) {
  return function(arg1) {
    return arg1 * arg2;
  };
}
function dividedBy(arg2) {
  return function(arg1) {
    return arg1 / arg2;
  };
}

console.log(eight(dividedBy(six())));
