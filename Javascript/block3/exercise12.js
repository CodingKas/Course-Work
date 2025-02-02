function reverser(str) {
  let reversedArray = [];
  for (let i = str.Length - 1; i >= 0; i--) {
    reversedArray.push(str[i]);
  }
  return reversedArray.join("");
}
module.exports = {
  reverser,
};
