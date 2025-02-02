function timesTwo(array) {
  let newArray = [];
  array.forEach((num) => {
    newArray.push(num * 2);
  });
  return newArray;
}
module.exports = {
  timesTwo,
};
