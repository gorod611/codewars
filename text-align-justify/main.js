/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
var justify = function(str, len) {
  // Your code goes here
  const arrStrings = [];
  let currPosition = 0;
  while (currPosition < str.length) {
    str[currPosition] === " " && currPosition++;
    let currPositionDiv = currPosition + len;
    const currString = str.substring(currPosition, currPositionDiv);
    let divSpace = currString.length;
    if (str[currPositionDiv] === " ") {
      arrStrings.push(currString);
    } else {
      divSpace =
        currString.lastIndexOf(" ") === -1 || currPositionDiv >= str.length
          ? currString.length
          : currString.lastIndexOf(" ");
      arrStrings.push(currString.substring(0, divSpace));
    }
    currPosition = currPosition + divSpace;
  }
  return arrStrings
    .map((string, index) => {
      const space = " ";
      const colSpaces = len - string.length;
      const arrWords = string.split(" ");
      const colSpacesWord = arrWords.length - 1;
      const spaceByWord = Math.trunc(colSpaces / colSpacesWord);
      const spaceByWordExt = colSpaces % colSpacesWord;
      const arrSpaces = [];
      for (let i = 0; i < colSpacesWord; i++) {
        if (index === arrStrings.length - 1) {
          arrSpaces.push(0);
        } else {
          arrSpaces.push(spaceByWord + (spaceByWordExt - i > 0 ? 1 : 0));
        }
      }
      const words = arrWords.map(
        (word, index) => word + space.repeat(arrSpaces[index])
      );
      return words.join(" ");
    })
    .join("\n");
};

var str =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.";
console.log(justify(str, 15));
