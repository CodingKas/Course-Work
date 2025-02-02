function swap(array1, array2, index) {
  const temp = array1[index];
  array1[index] = array2[index];
  array2[index] = temp;
}

module.exports = {
  swap,
};
