function duplicateCount(text) {
  return text
    .split(" ")
    .reduce((acc, word) => {
      acc.includes(word) || acc.push(word);
      return acc;
    }, [])
    .join(" ");
}
console.log(
  duplicateCount(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
);
