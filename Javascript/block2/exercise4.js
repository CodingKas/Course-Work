function splicer(Array, index) {
  Array.splice(index, 1);
  return Array;
}

module.exports = {
  splicer,
};
