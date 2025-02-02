function isString(array) {}
let stringarray = [];
array.array.forEach((element) => {
  if (typeof element === "string") {
    stringarray.push(element);
  }
});

module.exports = {
  isString,
};
