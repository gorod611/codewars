function solution(input, markers) {
  const regExp = new RegExp("[" + markers.join("") + "]" + "+.*$");
  return input
    .split("\n")
    .map(item => item.replace(regExp, "").trim())
    .join("\n");
}

console.log(
  solution("apples, plums % and bananas\npears\noranges !applesauce", [
    "%",
    "!"
  ])
);
