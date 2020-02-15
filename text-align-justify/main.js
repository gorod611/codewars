/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
var justify = function(str, len) {
  // Your code goes here
  const arrStrings = [];
  const lenString = str.length;
  let currPosition = 0;
  while (currPosition < lenString) {
    let currPositionDiv = currPosition + len;
    str[currPosition] === " " && currPosition++;
    const currString = str.substring(currPosition, currPositionDiv);
    let divSpace = currString.length;
    if (str[currPositionDiv] === " ") {
      arrStrings.push({ str: currString, space: divSpace });
    } else {
      divSpace =
        currString.lastIndexOf(" ") === -1 || currPosition + 30 > lenString
          ? currString.length
          : currString.lastIndexOf(" ");
      arrStrings.push({
        str: currString.substring(0, divSpace),
        space: divSpace
      });
    }
    currPosition = currPosition + divSpace;
  }
  // извлекаем первую порцию

  // ищем пробел
  // сдвигаем текущую позицию
  // помещаем в массив
  console.log(arrStrings);
};

var str =
  "Donec congue arcu lorem, ut ti ncidunt justo tempor quis. Morbi tincidunt id felis a condimentum. Aenean eleifend massa ut sodales dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec gravida elit ac sapien interdum efficitur. Morbi eleifend bibendum turpis ut suscipit. Nulla posuere, tellus feugiat egestas hendrerit, ligula neque sollicitudin urna, a convallis neque erat ut mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Vestibulum ac tellus pharetra, tincidunt augue eu, vehicula nisl. Pellentesque venenatis vestibulum ante ut sollicitudin. Morbi porttitor sem et ex lobortis posuere. Fusce ultricies, tellus a tempor volutpat, nulla magna malesuada mi, vel dapibus arcu est ultricies nulla. Praesent elit lectus, tincidunt quis nibh condimentum, sollicitudin molestie augue. Praesent mattis vestibulum cursus. Sed congue neque gravida, dapibus purus quis, bibendum est.";
justify(str, 30);
