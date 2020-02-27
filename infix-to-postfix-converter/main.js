function toPostfix (infix) {
  // Convert infix to postfix here, and return result.
  let out = [];
  let stack = [];
  const ops = {
    '(':1,
    ')':1,
    '+':2,
    '-':2,
    '*':3,
    '/':3,
    '^':4
  };
  const operators = Object.keys(ops);
  for (item of Array.from(infix)) {
    if (item.match(/[0-9]/)) {
      out.push(item)
    } else {
      if (item === '(') {
        stack.unshift(item)
      } else {
        if (operators.includes(item)) {
          if(item === ')') {
            const posScob = stack.indexOf('(');
            out.push(...stack.splice(0, posScob));
            stack.shift();
          } else {
            if(ops[stack[0]] && ops[stack[0]] >= ops[item]) {
              out.push(stack[0]);
              stack.shift();
              stack.unshift(item)
            } else {
              stack.unshift(item)
            }
          }
        }
  }
  }
  }
  console.log(out);
console.log(stack);
}

console.log(toPostfix("5+(6-2)*9+3^(7-1)"));