function take_and_push(array, index1, index2) {
  let newArray = [];
  newArray.push(array[index1], array[index2]);
  return newArray;
}

module.exports = {
  take_and_push,
};
