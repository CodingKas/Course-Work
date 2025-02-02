function isEven(arr) {
  let count = 0;

  for (leti = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

module.exports = {
  isEven,
};
