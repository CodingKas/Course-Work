function longestString(array, minlength) {
  let lastElement = null;
  array.forEach((str) => {
    if (str.length > minlength) {
      lastElement = str;
    }
  });
  return lastElement;
}

module.exports = {
  longestString,
};
