function duplicateCount(text) {
  const arrString = Array.from(text).reduce((acc, letter) => {
    acc[letter.toUpperCase()] = (acc[letter.toUpperCase()] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(arrString).filter(key => arrString[key] > 1).length;
}
console.log(duplicateCount("55sdfg75"));
